const log = require('../../log')('Behavioral -> Command');
const deviceRepository = require('./deviceRepository');

log();
log(__filename);

for (let i = 1; i <= 3; i++) {
    deviceRepository.execute('save', {
        id: i,
        name: `Device_${i}`,
        completed: false
    });
}

log(`Devices after save:`, deviceRepository.devices);
deviceRepository.devices = {};
log(`Devices after remove:`, deviceRepository.devices);

deviceRepository.replay();
log(`Devices after replay:`, deviceRepository.devices);