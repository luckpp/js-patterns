const log = require('../../log')('Mediator');

class Mediator {

    constructor() {
        this.channels = {};
    }


    subscribe(channel, context, func) {
        log(`Subscribed on channel [${channel}] with context -`, context);
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }
        this.channels[channel].push({
            context: context,
            func: func
        });
    }

    publish(channel, ...rest) {
        if (!this.channels[channel]) {
            return false;
        }
        for (let i = 0; i < this.channels[channel].length; i++) {
            let sub = this.channels[channel][i];
            sub.func.apply(sub.context, rest);
        }
    }
}

module.exports = new Mediator();