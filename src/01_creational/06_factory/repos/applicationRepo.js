const log = require('../../../log')('ApplicationRepo');

class ApplicationRepo {

    constructor() {
        log('created');
    }

    get(id) {
        log(`get(${id})`);
    }

    save(data) {
        log('save', data);
    }
}

module.exports = new ApplicationRepo();