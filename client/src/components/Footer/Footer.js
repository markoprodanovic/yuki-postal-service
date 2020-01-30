import React from 'react';
import classes from './Footer.module.css';

const footer = props => {
    return (
        <div className={classes.footer}>
            <p>made by <a href="https://www.instagram.com/yukithedogman/?hl=en" target="_blank">yuki</a> and <a href="https://www.instagram.com/markoprodanovic/?hl=en" target="_blank">marko</a></p>
        </div>
    );
}

export default footer;