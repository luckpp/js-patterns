const log = require('../../log')('Structural -> Facade');
const Device = require('./device');
const deviceServiceWrapper = require('./deviceServiceWrapper');

log();
log(__filename);

let device = new Device({
    name: 'Android',
    registered: false,
    updated: false,
    serialNumber: 1,
    user: 'me'
});

log(device);

deviceServiceWrapper.registerAndNotify(device);
