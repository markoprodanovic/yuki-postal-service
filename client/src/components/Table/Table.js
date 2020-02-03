import React, { Component } from 'react';
import { Howl } from 'howler';

import Header from './Header/Header';
import Row from './Row/Row';

import classes from './Table.module.css';

class Table extends Component {
    state = {
        lastClickedId: null,
        samples: {},
        posts: []
    }

    async componentDidMount() {
        const response = await fetch('api/posts');
        const posts = await response.json();
        this.setState({ posts: posts });

        this.state.posts.forEach((post) => {
            const path = `/audio/${post.audio}`;
            const sample = new Howl({ src: [path] });
            this.state.samples[post.audio] = sample;
        });
    }

    timestampClickHandler = (id) => {
        const lastId = this.state.lastClickedId;

        if (lastId === id) {
            this.togglePlay(this.state.samples[lastId]);
            return;
        }

        if (lastId) {
            this.state.samples[lastId].stop();
        }

        this.setState({ lastClickedId: id });

        const sample = this.state.samples[id];
        sample.play();
    }

    togglePlay(sound) {
        sound.playing() ? sound.stop() : sound.play();
    }

    render() {
        return (
            <div className={classes.container} >
                <table>
                    <Header update_time={'Tuesday, January 18, 2020 00:37:00'} />
                    <tbody>
                        <Row
                            updateNumber={7}
                            message={'Departed Facility in VANCOUVER - CA'}
                            location={'VANCOUVER - CANADA'}
                            time={'14:32'}
                            clickHandler={() => this.timestampClickHandler("OK_BABY_YPS.m4a")}
                            description={'ALBUM1030YBFLPH - NKOW'}
                        />
                        <Row
                            updateNumber={6}
                            message={'Clearance complete at VANCOUVER - CA'}
                            location={'VANCOUVER - CANADA'}
                            time={'02:39'}
                            clickHandler={() => this.timestampClickHandler("NEW_KIND_OF_WAR_YPS.m4a")}
                            description={'ALBUM1030YBFLPH'}
                        />
                        <Row
                            updateNumber={5}
                            message={'Arrived at Sort Facility VANCOUVER - CA'}
                            location={'VANCOUVER - CANADA'}
                            time={'03:01'}
                            clickHandler={() => this.timestampClickHandler("MET_GALA_YPS.m4a")}
                            description={'ALBUM1030YBFLPH'}
                        />
                    </tbody>
                    <Header update_time={"Wednesday, January 15, 2020 00:37:00"} />
                    <tbody>
                        <Row
                            updateNumber={4}
                            message={'Departed Facilityin AUCKLAND - NZ'}
                            location={'AUCKLAND - NEW ZEALAND'}
                            time={'02:39'}
                            clickHandler={() => this.timestampClickHandler("MASK_OFF_YPS.m4a")}
                            description={'ALBUM1030YBFLPH'}
                        />
                    </tbody>
                    <Header update_time={"Tuesday, January 14, 2020 00:37:00"} />
                    <tbody>
                        <Row
                            updateNumber={3}
                            message={'Processed at AUCKLAND - NZ'}
                            location={'AUCKLAND - NEW ZEALAND'}
                            time={'03:51'}
                            clickHandler={() => this.timestampClickHandler("DRAMA_QUEEN_YPS.m4a")}
                            description={'ALBUM1030YBFLPH'}
                        />
                        <Row
                            updateNumber={2}
                            message={'Arrived at Sort Facility AUCKLAND - NZ'}
                            location={'AUCKLAND - NEW ZEALAND'}
                            time={'02:20'}
                            clickHandler={() => this.timestampClickHandler("DARLING_YPS.m4a")}
                            description={'ALBUM1030YBFLPH'}
                        />
                    </tbody>
                    <Header update_time={"Monday, January 13, 2020 00:37:00"} />
                    <tbody>
                        <Row
                            updateNumber={1}
                            message={'Shipment information received'}
                            location={'HAMILTON - NEW ZEALAND'}
                            time={'02:44'}
                            clickHandler={() => this.timestampClickHandler("BE_FREE_YPS.m4a")}
                            description={'ALBUM1030YBFLPH'}
                        />
                    </tbody>
                </table >
            </div >
        );
    }
}

export default Table;