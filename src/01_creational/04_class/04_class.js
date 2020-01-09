const log = require('../../log')('Creational -> Class');
const Device = require('./device');

log();
log(__filename);

let device1 = new Device('PC');
let device2 = new Device('Laptop');
let device3 = new Device('Android');
let device4 = new Device('iPhone');

device1.update();
device2.register();
device3.register();
device4.register();

log(device1);
log(device1.__proto__);
log(`Prototypes equal: ${device1.__proto__ == Device.prototype}`);