const log = require('../../log')('DeviceRepository');

let repo = function () {

    let get = function (id) {
        log(`Getting device with id [${id}] from DB`);
        return {
            name: 'DB Device'
        };
    };

    let save = function (device) {
        log(`Saving [${device.name}] in DB`);
    };

    return {
        get: get,
        save: save
    }
}

module.exports = repo();