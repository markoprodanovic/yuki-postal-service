import React from 'react';

import classes from './Row.module.css';

const row = (props) => {
    return (
        <tr className={classes.row}>
            <td className={classes.updateNumber}>{props.updateNumber}</td>
            <td>{props.message}</td>
            <td>{props.location}</td>
            <td>
                <div className={classes.timestampContainer}>
                    <button className={classes.timestampButton} onClick={props.clickHandler}>
                        {props.time}
                    </button>
                    <div className={classes.playingIcon}>
                        {props.showPlaying ? <i className="fa fa-volume-up" /> : <i className="fa fa-volume-up" style={{ display: "none" }} />}
                    </div>
                </div>
            </td>
            <td>{props.description}</td>
        </tr >
    )
}

export default row