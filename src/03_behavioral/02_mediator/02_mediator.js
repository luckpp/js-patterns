const log = require('../../log')('Behavioral -> Mediator');
const Device = require('./device');
const services = require('./services');
const mediator = require('./mediator');

log();
log(__filename);

let device = new Device({
    name: 'Lightsaber',
    user: 'Luke Skywalker',
    registered: false,
    updated: false
});

let notificationService = new services.NotificationService();
let loggingService = new services.LoggingService();

mediator.subscribe('register', notificationService, notificationService.update);
mediator.subscribe('register', loggingService, loggingService.update);

device.register = function() {
    Device.prototype.register.call(this);
    mediator.publish('register', this);
};

device.register();
