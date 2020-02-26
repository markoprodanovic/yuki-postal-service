import React from 'react';
import classes from './Footer.module.css';

const footer = props => {
    return (
        <div className={classes.footer}>
            <div className={classes.credit}>
                <p>
                    conceptualized by
                </p>
                <p>
                    <a href="https://www.instagram.com/yukithedogman/?hl=en" target="_blank">YUKI</a> and <a href="https://www.instagram.com/markoprodanovic/?hl=en" target="_blank">MARKO</a>
                </p>
            </div>
        </div>
    );
}

export default footer;