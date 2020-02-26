import React from 'react';

import classes from './Header.module.css';
import windowSize from 'react-window-size';

const header = (props) => {
    // let date = props.update_time.substring(0, props.update_time.length - 8);
    let date = props.update_time
    if (props.windowWidth < 700) {
        date = props.short_date
    }
    return (
        <thead className={classes.header}>
            <tr>
                <th colSpan='2'>{date}</th>
                <th>Location</th>
                <th>Time</th>
                <th>Description</th>
            </tr>
        </thead>
    );
}

export default windowSize(header);