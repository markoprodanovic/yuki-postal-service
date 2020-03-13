import React, { useState, useEffect } from "react"

// components
import BrandHeader from '../../components/BrandHeader/BrandHeader'
import Footer from '../../components/Footer/Footer'
import Table from '../../components/Table/Table'

// external modules
import { Howl } from 'howler'

// styles
import classes from './Tracking.module.css'

function Tracking() {
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
    const [posts, setPosts] = useState([])
    const [audioSamples, setAudioSamples] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if (posts.length > 0) {
            const samples = {}
            posts.forEach(post => {
                post.updates.forEach(update => {
                    fetch(`http://localhost:5000/api/audio/${update.audio}`)
                        .then(res => {
                            const sample = makeSample(res.url, update.audio)
                            samples[update.audio] = sample
                        })
                        .catch(err => console.error(err))
                })
            })
            setAudioSamples(samples)
        }
    }, [posts])

    const makeSample = (url, title) => {
        return new Howl({
            src: [url],
            onplay: () => {
                setCurrentlyPlaying(title)
            },
            onend: () => {
                setCurrentlyPlaying(null)
            },
            onstop: () => {
                setCurrentlyPlaying(null)
            }
        })
    }

    const timestampClickHandler = (title) => {
        if (currentlyPlaying) {
            audioSamples[currentlyPlaying].stop()

            if (currentlyPlaying === title) {
                return
            }
        }
        audioSamples[title].play()
    }

    return (
        <div className={classes.tracking}>
            <img className={classes.continentBackground} src="pixel-map-background.png" alt=""></img>
            <BrandHeader />
            <Table
                posts={posts}
                timestampClickHandler={timestampClickHandler}
                currentlyPlaying={currentlyPlaying}
            />
            <Footer />
        </div>
    )
}

export default Tracking