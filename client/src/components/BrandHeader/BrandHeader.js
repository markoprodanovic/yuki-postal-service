import React from 'react';

import GlitchClip from 'react-glitch-effect/core/Clip';
import classes from './BrandHeader.module.css';

const brandHeader = props => (
    <div className={classes.brandHeader}>
        <GlitchClip disabled={props.disabled}>
            <img className={classes.logo} src="logo.png" alt="" />
        </GlitchClip>
        {/* <img className={classes.live} src="https://media.giphy.com/media/d7SnWNs1hyW2hNrFRn/giphy.gif" /> */}
        <img className={classes.live} src="live-gif.webp" alt="" />
    </div>
)

export default brandHeader;