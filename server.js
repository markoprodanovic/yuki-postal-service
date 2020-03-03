/*
server.js
author: Marko Prodanovic
copyright: Marko Prodanovic, Yuki Postal Service, 2020
*/

const updateScheduler = require('./updateScheduler')
// const updateScheduler = require('./updateScheduler.js/index.js')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const root = path.join(__dirname, 'client', 'build')

// JSON
const updates = require('./data/updates.json')
const posts = require('./data/posts.json')


// SCHEDULE UPDATES
const scheduler = new updateScheduler(updates);
let j = scheduler.schedule();

testMessage = {
    "response_type": "TEST",
    "scheduled": j
}

app.use(express.static(root), cors());

app.get('/api/test', (req, res) => {
    res.json(testMessage);
});

app.get('/api/posts', (req, res) => {
    res.json(posts)
});

app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    res.sendFile('index.html', { root });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));