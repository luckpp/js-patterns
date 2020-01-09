const log = require('../../log')('DeviceRepository');

class DeviceRepository {

    constructor() {
        this.devices = {};
        this.commands = [];
    }

    save(device) {
        this.devices[device.id] = device;
        log(`Saving device [${device.name}] to the db`);
    }

    replay() {
        for (const command of this.commands) {
            this.executeReplay(command.name, ...command.params);
        }
    }

    executeReplay(methodName, ...rest) {
        if (this[methodName]) {
            this[methodName].apply(this, rest);
        }
    }

    execute(methodName, ...rest) {
        this.commands.push({
            name: methodName,
            params: rest
        })
        if (this[methodName]) {
            this[methodName].apply(this, rest);
        }
    }
}

module.exports = new DeviceRepository();