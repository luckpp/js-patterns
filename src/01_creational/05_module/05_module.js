const log = require('../../log')('Creational -> Modules');
const deviceRepository = require('./deviceRepository');

log();
log(__filename);

let device = deviceRepository.get(1);
let deviceClone = { ...device };

log(device);
log(deviceClone);

deviceRepository.save(deviceClone);
