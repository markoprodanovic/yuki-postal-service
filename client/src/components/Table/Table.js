import React, { useState, useEffect } from "react"
import Header from './Header/Header'
import Row from './Row/Row'

import classes from './Table.module.css'

const Table = ({ posts, timestampClickHandler, currentlyPlaying }) => {
    const [reversedPosts, setReversedPosts] = useState([])

    useEffect(() => {
        if (posts.length > 0) {
            // reverse updates
            posts.map(post => post.updates.reverse())

            // reverse posts
            setReversedPosts(posts.reverse())
        }
    }, [posts])

    const makeHeader = (post) => {
        const d = new Date(post.date)
        const dateString = d.toString().substring(0, 15)
        return (
            <Header
                key={post.date}
                date={dateString}
                shortDate={post.shortDate} />
        )
    }

    const makeRow = (update) => {
        return (
            <Row
                key={update.updateNumber}
                updateNumber={update.updateNumber}
                message={update.message}
                location={update.location}
                time={update.updateTime}
                clickHandler={() => timestampClickHandler(update.audio)}
                description={update.description}
                showPlaying={currentlyPlaying === update.audio}
            />
        )
    }

    const makeTableBody = (id, updates) => {
        const rows = updates.map(update => makeRow(update))
        return (
            <tbody key={id}>
                {rows}
            </tbody>
        )
    }

    const makeTable = (posts) => {
        const table = []
        posts.forEach((post) => {
            const header = makeHeader(post)
            table.push(header)
            const body = makeTableBody(post._id, post.updates)
            table.push(body)
        })
        return table
    }

    let trackingTable = []
    if (reversedPosts.length > 0) {
        trackingTable = makeTable(reversedPosts)
    }

    return (
        <div className={classes.container} >
            <div className={classes.howTo}>
                CLICK TIMESTAMPS TO HEAR SAMPLES
            </div>
            <table>
                {trackingTable}
            </table>
        </div >
    );
}

export default Table;