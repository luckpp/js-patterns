const log = require('../../../log')('UserRepo');

class UserRepo {

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

module.exports = new UserRepo();