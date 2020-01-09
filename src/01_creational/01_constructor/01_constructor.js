const log = require('../../log')('Creational -> Constructor');

log();
log(__filename);

let Device = function (name) {
    this.name = name;
    this.updated = false;

    this.update = function () {
        log(`Update device [${this.name}]`);
        this.updated = true;
    }

    this.register = function () {
        log(`Register device [${this.name}]`);
    }
};

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