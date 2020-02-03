import React, { Component } from 'react';
import { Howl, Howler } from 'howler';

import TrackingInput from '../TrackingInput/TrackingInput';

import classes from './TableFeature.module.css';

class TableFeature extends Component {
    state = {
        lastClickedId: null,
        sounds: [
            '/audio/BE_FREE_YPS.m4a',
            '/audio/DARLING_YPS.m4a',
            '/audio/DRAMA_QUEEN_YPS.m4a',
            '/audio/MASK_OFF_YPS.m4a',
            '/audio/MET_GALA_YPS.m4a',
            '/audio/NEW_KIND_OF_WAR_YPS.m4a',
            '/audio/OK_BABY_YPS.m4a',
            '/audio/ON_THE_LAM_YPS.m4a',
            '/audio/SICTRN_YPS.m4a',
            '/audio/TAPESTRY_YPS.m4a'
        ],
        samples: []
    }

    componentWillMount = () => {
        this.state.sounds.forEach((path) => {
            const sample = new Howl({ src: [path] });
            this.state.samples.push(sample)
        })
    }

    timestampClickHandler = (id) => {
        const lastId = this.state.lastClickedId;
        console.log(`id: ${id}`);
        console.log(`last: ${lastId}`);

        if (lastId === id) {
            this.togglePlay(this.state.samples[lastId]);
            return;
        }

        if (lastId) {
            this.state.samples[lastId].stop();
        }

        this.setState({ lastClickedId: id });
        this.state.samples[id].play();
    }

    togglePlay(sound) {
        sound.playing() ? sound.stop() : sound.play();
    }

    render() {
        return (
            <div className={classes.container} >
                <TrackingInput />
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Saturday, January 18, 2020</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7</td>
                            <td>Departed Facility in VANCOUVER - CA</td>
                            <td>VANCOUVER - CANADA</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(7)}>
                                    14:32
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH - NKOW</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Clearance complete at VANCOUVER - CA</td>
                            <td>VANCOUVER - CANADA</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(6)}>
                                    02:39
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Arrived at Sort Facility VANCOUVER - CA</td>
                            <td>VANCOUVER - CANADA</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(5)}>
                                    03:01
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan='2'>Wednesday, January 15, 2020</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>Departed Facilityin AUCKLAND - NZ</td>
                            <td>AUCKLAND - NEW ZEALAND</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(4)}>
                                    02:39
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan='2'>Tuesday, January 14, 2020</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>Processed at AUCKLAND - NZ</td>
                            <td>AUCKLAND - NEW ZEALAND</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(3)}>
                                    03:51
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Arrived at Sort Facility AUCKLAND - NZ</td>
                            <td>AUCKLAND - NEW ZEALAND</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(2)}>
                                    02:20
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan='2'>Monday, January 13, 2020</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Shipment information received</td>
                            <td>HAMILTON - NEW ZEALAND</td>
                            <td>
                                <button className={classes.timestampButton} onClick={() => this.timestampClickHandler(1)}>
                                    02:44
                            </button>
                            </td>
                            <td>ALBUM1030YBFLPH</td>
                        </tr>
                    </tbody>
                </table >
            </div >
        );
    }
}

export default TableFeature;