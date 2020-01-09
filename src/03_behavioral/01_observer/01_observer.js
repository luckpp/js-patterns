const log = require('../../log')('Behavioral -> Observer');
const observers = require('./observers');
const DeviceSubject = require('./deviceSubject');

log();
log(__filename);

let notificationService = new observers.NotificationService();
let loggingService = new observers.LoggingService();

let deviceSubject = new DeviceSubject({
    name: 'Lightsaber',
    user: 'Master Yoda',
    registered: false,
    updated: false
});

deviceSubject.addObserver(notificationService.update);
deviceSubject.addObserver(loggingService.update);
deviceSubject.register();
deviceSubject.removeObserver(loggingService.update);
deviceSubject.register();