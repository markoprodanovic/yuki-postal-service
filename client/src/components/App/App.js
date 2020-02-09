// react
import React, { Component } from 'react';

import { Howl } from 'howler';

// components
import BrandHeader from '../BrandHeader/BrandHeader';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';


// styles
import './App.css';

class App extends Component {
  state = {
    lastClickedId: null,
    disabled: true,
    samples: {},
    posts: [],
    playing: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
  }

  async componentDidMount() {
    const response = await fetch('api/posts');
    const posts = await response.json();
    this.setState({ posts: posts });

    this.state.posts.forEach((post) => {
      const path = `/audio/${post.audio}`;
      const sample = new Howl({
        src: [path],
        onplay: () => {
          const updatedPlayingList = this.state.playing;
          updatedPlayingList[post.update_number] = true;
          this.setState({ disabled: false, playing: updatedPlayingList });
        },
        onend: () => {
          const updatedPlayingList = this.state.playing;
          updatedPlayingList[post.update_number] = false;
          this.setState({ disabled: true, playing: updatedPlayingList });
        },
        onstop: () => {
          const updatedPlayingList = this.state.playing;
          updatedPlayingList[post.update_number] = false;
          this.setState({ disabled: true, playing: updatedPlayingList });
        }
      });
      this.state.samples[post.audio] = sample;
    });
  }

  timestampClickHandler = (id) => {
    const lastId = this.state.lastClickedId;

    if (lastId === id) {
      this.togglePlay(this.state.samples[lastId], lastId);
      return;
    }

    if (lastId) {
      this.state.samples[lastId].stop();
    }

    this.setState({ lastClickedId: id });

    const sample = this.state.samples[id];
    sample.play()
  }

  togglePlay(sound, id) {
    sound.playing() ? sound.stop() : sound.play();
  }
  render() {
    return (
      <div className="App" >
        <BrandHeader
          disabled={this.state.disabled}
        />
        <Table
          timestampClickHandler={this.timestampClickHandler}
          playing={this.state.playing}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
