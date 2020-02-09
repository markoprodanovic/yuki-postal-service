/*
server.js
author: Marko Prodanovic
copyright: Marko Prodanovic, Yuki Postal Service, 2020
*/

// const updateScheduler = require('./updateScheduler')
const updateScheduler = require('./updateScheduler.js');
const express = require('express');
const app = express();

// JSON
const updates = require('./updates.json');
const posts = require('./posts.json');


// SCHEDULE UPDATES
const scheduler = new updateScheduler(updates);
let j = scheduler.schedule();

testMessage = {
    "response_type": "TEST",
    "scheduled": j
}

app.get('/api/test', (req, res) => {
    res.json(testMessage);
});

app.get('/api/posts', (req, res) => {
    res.json(posts)
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));