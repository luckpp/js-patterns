const log = require('../../log')('Device');

class Device {

    constructor(data) {
        this.name = data.name;
        this.user = data.user;
        this.updated = data.updated;
        this.registered = data.registered;
    }

    update() {
        log(`Update device [${this.name}]`);
        this.updated = true;
    }

    register() {
        log(`Register device [${this.name}]`);
        this.registered = true;
    }
}

module.exports = Device;