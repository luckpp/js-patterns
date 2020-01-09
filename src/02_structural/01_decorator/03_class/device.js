const log = require('../../../log')('Device');

class Device {

    constructor(name) {
        this.name = name;
        this.updated = false;
    }

    update() {
        log(`Update device [${this.name}]`);
        this.updated = true;
    }

    register() {
        log(`Register device [${this.name}]`);
    }
}

module.exports = Device;