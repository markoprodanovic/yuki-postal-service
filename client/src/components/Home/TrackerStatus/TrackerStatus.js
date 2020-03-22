import React from 'react'
import { Link } from "react-router-dom";

import classes from './TrackerStatus.module.css'

function TrackerStatus() {

    return (
        <div className={classes.trackerStatus}>
            <div className={classes.trackerCircle}>
                <div className={classes.info}>
                    <div className={classes.background}>
                        <img src="tracker-circle/background.png"></img>
                    </div>
                    <div className={classes.foreground}>
                        <img src="tracker-circle/foreground.png"></img>
                    </div>
                    {/* <div className={classes.progress}>
                    </div> */}
                    <h2><Link to="/tracking">CLICK FOR FULL PREVIEW</Link></h2>
                    <p>Arrived at Sort Facility AUCKLAND - NZ</p>
                </div>
            </div>
            <h3>You have 1 Parcel on it's way!</h3>
        </div >
    )
}

export default TrackerStatus