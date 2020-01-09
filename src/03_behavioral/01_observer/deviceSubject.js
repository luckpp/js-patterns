const log = require('../../log')('DeviceSubject');
const Device = require('./device');
const ObserverList = require('./observerList');

class DeviceSubject extends Device {

    constructor(data) {
        super(data);
        this.observersList = new ObserverList();
    }

    register() {
        super.register();
        log(`Register device [${this.name}]`);
        this.notify(this);
    }

    addObserver(observer) {
        this.observersList.add(observer);
    }

    removeObserver(observer) {
        this.observersList.remove(observer);
    }

    notify(context) {
        for (const observer of this.observersList) {
            observer(context);
        }
    }
}

module.exports = DeviceSubject;