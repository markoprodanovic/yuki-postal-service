const mongoose = require('mongoose')
const Schema = mongoose.Schema

const updateSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    updateNumber: Number,
    updateTime: String,
    message: String,
    location: String,
    description: String,
    audio: String
})

const daySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: Date,
    shortDate: String,
    updates: [updateSchema]
})

const Day = mongoose.model('Day', daySchema)
const Update = mongoose.model('Update', updateSchema)

module.exports = { Day, Update }