import React from 'react'
import { Slide } from 'react-slideshow-image';

import classes from './Slideshow.module.css'
import './Slideshow.css';

// TODO: Delete this entire component and styling once you get the goahead from Hugo

const fadeImages = [
    'imageGallery/1.jpeg',
    'imageGallery/2.jpeg',
    'imageGallery/3.jpeg',
    'imageGallery/4.jpeg',
    'imageGallery/5.jpeg',
    'imageGallery/6.jpeg'
];

const properties = {
    duration: 6000,
    transitionDuration: 600,
    infinite: true,
    indicators: false,
    arrows: false,
    autoplay: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

function Slideshow() {

    return (
        <div className={classes.slideshow}>
            <h3>"Deliver with Freedom"</h3>
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div className="image-container">
                            <img className={classes.image} src={fadeImages[0]} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="image-container">
                            <img className={classes.image} src={fadeImages[1]} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="image-container">
                            <img className={classes.image} src={fadeImages[2]} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="image-container">
                            <img className={classes.image} src={fadeImages[3]} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="image-container">
                            <img className={classes.image} src={fadeImages[4]} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="image-container">
                            <img className={classes.image} src={fadeImages[5]} />
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Slideshow