import React from 'react';

import classes from './Row.module.css';

const row = (props) => {
    return (
        <tr>
            <td>{props.updateNumber}</td>
            <td>{props.message}</td>
            <td>{props.location}</td>
            <td>
                <button className={classes.timestampButton} onClick={props.clickHandler}>
                    {props.time}
                </button>
            </td>
            <td>{props.description}</td>
        </tr>
    )
}

export default row