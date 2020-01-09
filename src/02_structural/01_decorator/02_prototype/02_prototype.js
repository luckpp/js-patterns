const log = require('../../../log')('Structural -> PrototypeDecorator');
const Device = require('./device');

log();
log(__filename);

let CustomDevice = function (name, serialNumber) {
    Device.call(this, name);
    this.serialNumber = serialNumber;
}
CustomDevice.prototype = Object.create(Device.prototype);
CustomDevice.prototype.notify = function () {
    log('[CustomDevice] -', 'Notify user');
}
CustomDevice.prototype.update = function () {
    log('[CustomDevice] -', `Update device [${this.name}]`);
    Device.prototype.update.call(this);
    this.notify();
}

let customDevice = new CustomDevice('custom device', 1);

customDevice.register();
customDevice.update();