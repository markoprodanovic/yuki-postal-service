import React from 'react';

import classes from './Header.module.css';

const header = (props) => {
    const date = props.update_time.substring(0, props.update_time.length - 8);
    return (
        <thead>
            <tr>
                <th colSpan='2'>{date}</th>
                <th>Location</th>
                <th>Time</th>
                <th>Description</th>
            </tr>
        </thead>
    );
}

export default header;