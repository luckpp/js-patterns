const log = require('../../log')('Structural -> Flyweight');
const process = require('process');
const flyweightFactory = require('./flyweightFactory');
const deviceCollection = require('./deviceCollection');

log();
log(__filename);

let operatingSystems = ['Windows', 'Linux', 'iOS', 'Android'];
let vendor = ['Lenovo', 'IBM', 'Dell', 'HP', 'Acer'];
let users = ['Luke Skywalker', 'Master Yoda', 'Chewbacca', 'Obi-Wan Kenobi'];
let registered = [true, false];

let initialMemory = process.memoryUsage().heapUsed;
log(`Initial HeapUsed: ${initialMemory}`);

let random = function (max) {
    return Math.floor(Math.random() * max);
}

let useFlyweight = true;

for (let i = 0; i < 1000000; i++) {
    deviceCollection.add({
        name: `Device ${i}`,
        os: operatingSystems[random(operatingSystems.length)],
        vendor: vendor[random(vendor.length)],
        user: users[random(users.length)],
        registered: registered[random(registered.length)],
        useFlyweight: useFlyweight
    });
}

log(`Flyweights count: ${flyweightFactory.count()}`);

let finalMemory = process.memoryUsage().heapUsed;
log(`Final HeapUsed: ${finalMemory}`);

log(`Memory used: ${(finalMemory - initialMemory) / (1024 * 1024)} MB`);