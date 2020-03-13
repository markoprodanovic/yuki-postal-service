import React from 'react'
import { Link } from "react-router-dom";

import classes from './TrackerInput.module.css'

function TrackerInput() {
    return (
        <div className={classes.trackerInput}>
            <h2>TRACK SHIPMENT</h2>
            <input type="text" placeholder="Please enter tracking number" />
            <div className={classes.buttonContainer}>
                <button><Link to="/tracking">>></Link></button>
            </div>
        </div>
    )
}

export default TrackerInput