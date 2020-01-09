let logFactory = function (prefix) {
    let clog = console.log.bind(console);
    let log = function (...rest) {
        if (prefix) {
            if (rest.length > 0) {
                clog(`[${prefix}] -`, ...rest);
            } else {
                clog(`[${prefix}]`);
            }
        } else {
            if (rest.length > 0) {
                clog(...rest);
            } else {
                clog();
            }
        }
    }
    return log;
}

module.exports = logFactory;