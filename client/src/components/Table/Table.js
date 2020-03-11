import React, { useState, useEffect } from "react"
import Header from './Header/Header'
import Row from './Row/Row'

import classes from './Table.module.css'

const Table = ({ timestampClickHandler, playing }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts`)
            .then(res => res.json())
            .then(data => setPosts(data.reverse()))
            .catch(err => console.error(err))
    }, [])

    const makeHeader = (post) => {
        const d = new Date(post.date)
        const dateString = d.toString().substring(0, 15)
        return (
            <Header
                key={post.date}
                update_time={dateString}
                short_date={post.shortDate} />
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
                showPlaying={playing[update.updateNumber]}
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
        posts.map((post) => {
            const header = makeHeader(post)
            table.push(header)
            const body = makeTableBody(post._id, post.updates)
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