const Device = require('./device');

class DeviceCollection {

    constructor() {
        this.devices = {};
        this.count = 0;
    }

    add(data) {
        this.devices[data.name] = new Device(data);
        this.count++;
    }

    get(name) {
        return this.devices[name];
    }

    count() {
        return this.count;
    }
}

module.exports = new DeviceCollection();