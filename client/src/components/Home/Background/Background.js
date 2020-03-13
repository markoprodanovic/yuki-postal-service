import React from 'react'

import classes from './Background.module.css'

function Background() {
    return (
        <div className={classes.background}>
            <div className={classes.topPannel}>
                <img className={classes.continent} src="pixel-map-background.png" alt=""></img>
                <img className={classes.logo} src="logo-no-text.png" alt=""></img>
            </div>
            <div className={classes.bottomPannel}></div>
        </div>
    )
}

export default Background
