import React from 'react';
import classes from './TrackingInput.module.css';

const trackingInput = props => {
    return (
        <form className={classes.trackingInput}>
            <label for="name">Tracking Number </label>
            <input type="text" value="RX590686915DE"></input>
            <button>Go</button>
        </form>
    );
}

export default trackingInput;