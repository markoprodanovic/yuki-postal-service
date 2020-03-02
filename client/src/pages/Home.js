import React from 'react'

// components
import TrackerInput from '../components/Home/TrackerInput/TrackerInput'
import Background from '../components/Home/Background/Background'
import Slideshow from '../components/Home/Slideshow/Slideshow'

// styles
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.home}>
            <Background />
            {/* <div className={classes.slideContainer}>
                <Slideshow />
            </div>
            <TrackerInput /> */}
        </div >
    )
}

export default Home