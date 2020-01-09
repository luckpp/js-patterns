const log = require('../../log')('Observers');

let NotificationService = function () {
    let message = 'Notifying';
    this.update = function (device) {
        log(`${message} [${device.user}] of device [${device.name}]`);
    }
};

let LoggingService = function () {
    let message = 'Logging';
    this.update = function (device) {
        log(`${message} [${device.user}] of device [${device.name}]`);
    }
};

module.exports = {
    NotificationService,
    LoggingService
}