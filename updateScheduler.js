const schedule = require('node-schedule');
const fs = require('fs');

module.exports = class updateScheduler {

    constructor(updates) {
        this.updates = updates;
    }

    schedule() {
        this.updates.forEach((update) => {
            const date = new Date(update.update_time);
            const job = () => {
                const oldPath = `./vault/${update.audio}`;
                const newPath = `./client/public/audio/${update.audio}`;

                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        console.log(`AUDIO TRANSFER ERROR:`);
                        console.log(err);
                    }
                });
            };
            schedule.scheduleJob(date, job);
        });
    }
}