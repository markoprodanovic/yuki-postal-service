import React, { useState, useEffect } from "react"
import Header from './Header/Header'
import Row from './Row/Row'

import classes from './Table.module.css'

const Table = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://localhost:5000/api/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, [])

    const makeHeader = (post) => {
        return (
            <Header
                update_time={post.date}
                short_date={post.shortDate} />
        )
    }

    const makeRow = (post) => {
        return (
            <Row
                key={post._id}
                updateNumber={post.updateNumber}
                message={post.message}
                location={post.location}
                time={post.updateTime}
                clickHandler={() => props.timestampClickHandler(post.audio)}
                description={post.description}
                showPlaying={props.playing[post.update_number]}
            />
        )
    }

    const makeTableBody = (updates) => {
        const rows = updates.map(update => makeRow(update))
        return (
            <tbody>
                {rows}
            </tbody>
        )
    }

    const makeTable = (posts) => {
        const table = []
        posts.map((post) => {
            const header = makeHeader(post)
            table.push(header)
            const body = makeTableBody(post.updates)
            table.push(body)
        })
        return table
    }

    let trackingTable = [];
    if (posts.length > 0) {
        trackingTable = makeTable(posts)
    }

    return (
        <div className={classes.container} >
            <p>~~progress bar goes here~~</p>
            <div className={classes.howTo}>
                * Click timestamps to hear samples *
            </div>
            <table>
                {trackingTable}
            </table>
        </div >
    );
}

export default Table;