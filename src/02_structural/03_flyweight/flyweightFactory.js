class Flyweight {
    constructor(os, vendor, user, registered, updated) {
        this.os = os;
        this.vendor = vendor;
        this.user = user;
        this.registered = registered;
        this.updated = updated;
    }
};

class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }
    get(os, vendor, user, registered) {
        let id = os + vendor + user + registered;
        if (!this.flyweights[id]) {
            this.flyweights[id] = new Flyweight(os, vendor, user, registered);
        }
        return this.flyweights[id];
    }
    count() {
        let count = 0;
        for (const f in this.flyweights) {
            count++;
        }
        return count;
    }
};

module.exports = new FlyweightFactory();