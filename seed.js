const { Day, Update } = require('./models/Day')
const dotenv = require('dotenv')
const fs = require('fs')
dotenv.config()

const mongoose = require('mongoose')
const user = process.env.DB_USER
const pass = process.env.DB_PASS
const uri = `mongodb+srv://${user}:${pass}@yuki-postal-service-ls1nu.mongodb.net/test?retryWrites=true&w=majority`
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(uri).catch((err) => {
  console.error('Database error', err.stack)
})

Day.deleteMany({}, (err, res) => {
  seed()
})

function seed() {
  console.log('Seeding Database...')
  const data = fs.readFileSync('./data/posts.json')
  const posts = JSON.parse(data)

  let done = 0
  posts.map((post) => {
    const day = new Day({
      _id: new mongoose.Types.ObjectId(),
      date: new Date(post.date),
      shortDate: post.shortDate,
      updates: post.updates.map((update) => makeUpdate(update)),
    })
    day.save((err) => {
      if (err) {
        console.error(err)
      }
      done++
      if (done === posts.length) {
        exit()
      }
    })
  })
}

// HELPERS
function makeUpdate(update) {
  return new Update({
    _id: new mongoose.Types.ObjectId(),
    updateNumber: update.updateNumber,
    updateTime: update.updateTime,
    message: update.message,
    location: update.location,
    description: update.description,
    audio: update.audio,
  })
}

function exit() {
  mongoose.disconnect()
}
