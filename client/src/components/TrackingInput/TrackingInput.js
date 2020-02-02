import React from 'react';
import classes from './TrackingInput.module.css';

const trackingInput = props => {
    return (
        <div className={classes.trackingInput}>
            <form className={classes.trackingInput}>
                <label htmlFor="name">Tracking Number: </label>
                <input type="text" value="BF01242020CA"></input>
                <button onClick={props.clicked}>Track</button>
            </form>
        </div>
    );
}

export default trackingInput;