const log = require('../../log')('Creational -> Factory');

log();
log(__filename);

let repoFactory = require('./repoFactory');
let repoFactory_temp = require('./repoFactory');

// NOTE: the factory is cached due to the Common.JS used in Node / due to the module caching.
// NOTE: Modules are cached after the first time hey are loaded!

repoFactory.device.get(1);
repoFactory_temp.device = {
    get: function () {
        log('unknown');
    }
}
repoFactory.device.get(2);


