import React from 'react'

import classes from './Background.module.css'

function Background() {
    return (
        <div className={classes.background}>
            <img className={classes.continent} src="pixel-map-background.png" alt=""></img>
        </div>
    )
}

export default Background
