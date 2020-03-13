import React from 'react'

import useWindowSize from '../../../hooks/useWindowSize'

import classes from './Header.module.css'

function Header(props) {
    const size = useWindowSize()

    const date = size.width < 700 ? props.shortDate : props.date

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

export default Header;