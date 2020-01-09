const log = require('../../log')('DeviceService');

class DeviceService {

    register(device) {
        device.registered = true;
        log(`register device [${device.name}]`);
    }

    setRegisteredDate(device) {
        device.registeredDate = new Date();
        log(`[${device.name}] registered on [${device.registeredDate}]`);
    }

    notifyRegistration(device, user) {
        log(`notify user [${user}] of the registration of device [${device.name}]`);
    }

    update(device) {
        log(`update device [${device.name}]`);
    }
}

module.exports = new DeviceService();
