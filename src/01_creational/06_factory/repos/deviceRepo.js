const log = require('../../../log')('DeviceRepo');

class DeviceRepo {

    constructor() {
        log('created');
    }

    get(id) {
        log(`get(${id})`);
    }

    save(data) {
        log('save', data);
    }
}

module.exports = new DeviceRepo();