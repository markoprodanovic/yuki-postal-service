const schedule = require('node-schedule');
const posts = require('./data/posts.json')
const fs = require('fs');

module.exports = class updateScheduler {

    constructor(updates) {
        this.updates = updates;
    }

    schedule() {
        this.updates.forEach((update) => {
            update.updates.forEach(post => {
                const date = new Date(post.update_time);
                const job = () => {

                    const oldPath = `./vault/${post.audio}`;
                    // const newPath = `./client/public/audio/${post.audio}`;
                    const newPath = `./client/build/audio/${post.audio}`;

                    const readJSONString = fs.readFileSync('./data/posts.json')
                    const postsData = JSON.parse(readJSONString)
                    postsData.unshift(update)

                    const writeJSONString = JSON.stringify(postsData)
                    fs.writeFileSync('./data/posts.json', writeJSONString)

                    fs.rename(oldPath, newPath, (err) => {
                        if (err) {
                            console.log(`AUDIO TRANSFER ERROR:`);
                            console.log(err);
                            // and maybe find a way to get notified about it
                        }
                    });
                };
                schedule.scheduleJob(date, job);
                console.log(`SCHEDULED: ${post.audio}`)
            })
        })


        // this.updates.forEach((update) => {
        //     const date = new Date(update.update_time);
        //     const job = () => {
        //         const oldPath = `./vault/${update.audio}`;
        //         const newPath = `./client/public/audio/${update.audio}`;
        //         // const newPath = `../client/build/public/audio/${update.audio}`; USE FOR ACTUAL BUILD

        //         fs.rename(oldPath, newPath, (err) => {
        //             if (err) {
        //                 console.log(`AUDIO TRANSFER ERROR:`);
        //                 console.log(err);
        //                 // and maybe find a way to get notified about it
        //             }
        //         });
        //     };
        //     schedule.scheduleJob(date, job);
        //     console.log(`SCHEDULED: ${update.audio}`)
        // });
    }
}