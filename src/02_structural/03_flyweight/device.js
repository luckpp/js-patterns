const flyweightFactory = require('./flyweightFactory');

class Device {

    constructor(data) {
        this.name = data.name;
        if (data.useFlyweight) {
            this.flyweight = flyweightFactory.get(data.os, data.vendor, data.user, data.registered);
        } else {
            this.os = data.os;
            this.vendor = data.vendor
            this.user = data.user;
            this.registered = data.registered;
        }
    }

    // get os() {
    //     return this.flyweight.os;
    // }
}

module.exports = Device;