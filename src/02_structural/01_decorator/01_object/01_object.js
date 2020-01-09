const log = require('../../../log')('Structural -> ObjectDecorator');
const Device = require('./device');

log();
log(__filename);

let device = new Device('normal device');
device.register();
device.update();

let customDevice = new Device('custom device');
customDevice.notify = function () {
    log('[CustomDevice] -', 'Notify user');
}
customDevice.update = function () {
    log('[CustomDevice] -', `Update device [${this.name}]`);
    Device.prototype.update.call(this);
    this.notify();
}
customDevice.register();
customDevice.update();