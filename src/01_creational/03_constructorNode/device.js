const log = require('../../log')('Device');

let Device = function (name) {
    this.name = name;
    this.updated = false;
};
Device.prototype.update = function () {
    log(`Update device [${this.name}]`);
    this.updated = true;
};
Device.prototype.register = function () {
    log(`Register device [${this.name}]`);
};

module.exports = Device;