import React from 'react'

// components
import TrackerStatus from '../../components/Home/TrackerStatus/TrackerStatus'
import Background from '../../components/Home/Background/Background'

// styles
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.home}>
            <img className={classes.logo} src="yps-gif-cropped.gif" alt=""></img>
            <TrackerStatus
                progress={7}
                lastUpdateMessage={'Arrived at Sort Facility AUCKLAND - NZ'} />
            <Background />
        </div >
    )
}

export default Home