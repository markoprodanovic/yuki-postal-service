import React, { Component } from 'react';
import { Howl, Howler } from 'howler';

import TrackingInput from '../TrackingInput/TrackingInput';

import classes from './TableFeature.module.css';

class TableFeature extends Component {
    state = {
        lastClickedId: -1,
        sound: new Howl({
            src: ['NKOW.wav']
        })
    }

    timestampClickHandler = (id) => {

        if (this.state.sound.playing()) {
            this.state.sound.stop();

            if (id != this.state.lastClickedId) {
                // play the new sound
                this.state.sound.play();
                this.setState({ lastClickedId: id });
            }
        } else {
            this.state.sound.play();
        }
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