import React from 'react'
import { Link } from "react-router-dom";

import classes from './TrackerStatus.module.css'

function TrackerStatus({ progress, lastUpdateMessage }) {

    const progressImgSrc = `tracker-circle/${progress.toString()}.png`

    return (
        <div className={classes.trackerStatus}>
            <div className={classes.trackerCircle}>
                <div className={classes.background}>
                    <img src="tracker-circle/background.png" alt=""></img>
                </div>
                <div className={classes.foreground}>
                    <img src="tracker-circle/foreground.png" alt=""></img>
                </div>
                <div className={classes.progress}>
                    <img src={progressImgSrc} alt="" />
                </div>
                <div className={classes.info}>
                    <h2><Link to="/tracking">TRACK ALBUM</Link></h2>
                    <p>{lastUpdateMessage}</p>
                </div>
            </div>
            <h3>You have 1 Parcel on it's way!</h3>
        </div >
    )
}

export default TrackerStatus