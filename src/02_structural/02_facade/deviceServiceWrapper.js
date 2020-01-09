const log = require('../../log')('DeviceServiceWrapper');
const deviceService = require('./deviceService');

class DeviceServiceWrapper {

    registerAndNotify(device) {
        log(`register device [${device.name}]`);
        deviceService.register(device);
        if (device.registered) {
            deviceService.setRegisteredDate(device);
            deviceService.notifyRegistration(device, device.user);
            deviceService.update(device);

        }
    }
};

module.exports = new DeviceServiceWrapper();
