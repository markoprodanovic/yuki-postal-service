import React from 'react';
import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.credit}>
                <p>
                    conceptualized by
                </p>
                <p>
                    <a href="https://www.instagram.com/yukithedogman/?hl=en" target="_blank" rel="noopener noreferrer" >
                        YUKI
                    </a> and <a href="https://www.instagram.com/markoprodanovic/?hl=en" target="_blank" rel="noopener noreferrer">
                        MARKO
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;