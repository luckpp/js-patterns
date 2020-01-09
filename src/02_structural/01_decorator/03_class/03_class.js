const log = require('../../../log')('Structural -> PrototypeDecorator');
const Device = require('./device');

log();
log(__filename);

class CustomDevice extends Device {

    constructor(name, serialNumber) {
        super(name);
        this.serialNumber = serialNumber;
    }

    notify() {
        log('[CustomDevice] -', 'Notify users');
    }

    update() {
        log('[CustomDevice] -', `Update device [${this.name}]`);
        super.update();
        this.notify();
    }
}

let customDevice = new CustomDevice('custom device', 1);

customDevice.register();
customDevice.update();