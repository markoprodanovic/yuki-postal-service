import React from 'react'

// components
import TrackerInput from '../../components/Home/TrackerInput/TrackerInput'
import Background from '../../components/Home/Background/Background'

// styles
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.home}>
            <Background />
            <TrackerInput />
        </div >
    )
}

export default Home