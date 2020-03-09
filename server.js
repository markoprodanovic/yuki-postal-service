/*
server.js
author: Marko Prodanovic
copyright: Marko Prodanovic, Yuki Postal Service, 2020
*/

// OLD IMPLEMENTATION
// const updateScheduler = require('./updateScheduler')
// const updateScheduler = require('./updateScheduler.js/index.js')

// EXPRESS AND ROUTING
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const root = path.join(__dirname, 'client', 'build')

// DOTENV
const dotenv = require('dotenv')
dotenv.config()

// DB
const mongoose = require('mongoose')
const user = process.env.DB_USER
const pass = process.env.DB_PASS
const uri = `mongodb+srv://${user}:${pass}@yuki-postal-service-ls1nu.mongodb.net/test?retryWrites=true&w=majority`
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(uri).catch(err => {
    console.error('Database error', err.stack)
})
const { Day } = require('./models/Day')

// JSON
// const updates = require('./data/updates.json')
// const posts = require('./data/posts.json')

// SCHEDULE UPDATES
// const scheduler = new updateScheduler(updates);
// let j = scheduler.schedule();

app.use(express.static(root), cors());

// Updates API Endpoint
app.get('/api/posts', (req, res) => {
    Day.find()
        .then(updates => {
            if (updates && updates.length > 0) {
                res.status(200).json(updates)
            } else {
                res.status(404).json({ message: 'No Updates in Database' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
});

app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));