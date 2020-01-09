class Device {
    constructor(data) {
        this.name = data.name;
        this.registered = data.registered;
        this.updated = data.updated;
        this.serialNumber = data.serialNumber;
        this.user = data.user;
    }
}

module.exports = Device;