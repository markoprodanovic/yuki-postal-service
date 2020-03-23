import React from 'react';

import classes from './BrandHeader.module.css';

function BrandHeader() {
    return (
        <div className={classes.brandHeader}>
            <img className={classes.logo} src="yps-gif-cropped.gif" alt="" />
            {/* <img className={classes.live} src="https://media.giphy.com/media/d7SnWNs1hyW2hNrFRn/giphy.gif" /> */}
            <img className={classes.live} src="live.gif" alt="" />
        </div>
    )
}

export default BrandHeader;