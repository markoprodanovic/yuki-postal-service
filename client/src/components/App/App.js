// react
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Howl } from 'howler';

// components
import BrandHeader from '../BrandHeader/BrandHeader';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';

// pages
import Tracking from '../../pages/Tracking';
import Home from '../../pages/Home';

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
    try {
      const response = await fetch('http://localhost:5000/api/posts')
      const posts = await response.json()
      this.setState({ posts: posts })
    } catch (err) {
      console.error(err)
    }

    this.state.posts.forEach((post) => post.updates.forEach((update) => {
      const path = `/audio/${update.audio}`
      const sample = new Howl({
        src: [path],
        onplay: () => {
          const updatedPlayingList = this.state.playing;
          updatedPlayingList[update.updateNumber] = true;
          this.setState({ disabled: false, playing: updatedPlayingList });
        },
        onend: () => {
          const updatedPlayingList = this.state.playing;
          updatedPlayingList[update.updateNumber] = false;
          this.setState({ disabled: true, playing: updatedPlayingList });
        },
        onstop: () => {
          const updatedPlayingList = this.state.playing;
          updatedPlayingList[update.updateNumber] = false;
          this.setState({ disabled: true, playing: updatedPlayingList });
        }
      });
      this.state.samples[update.audio] = sample;
    }));
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
      <Router>
        <div className="App" >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tracking">
              <img className="Continent-Background" src="pixel-map-background.png"></img>
              <BrandHeader
                disabled={this.state.disabled}
              />
              <Table
                timestampClickHandler={this.timestampClickHandler}
                playing={this.state.playing}
              />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
