import React from 'react'

// components
import TrackerStatus from '../../components/Home/TrackerStatus/TrackerStatus'
import Background from '../../components/Home/Background/Background'

// styles
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.home}>
            <Background />
            <TrackerStatus />
        </div >
    )
}

export default Home