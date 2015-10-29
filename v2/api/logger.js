var winston = require('winston');
var consoleConfig, fileConfig;

// MODULE API
module.exports.logger = configure();
module.exports.stream = getStream();

// MODULE IMPLEMENTATIONS
function configure () {
    // add our custom transports for all loggers
    consoleConfig = {
        level: 'silly',
        colorize: true,
        handleExceptions: false,
        timestamp: true
    };
    fileConfig = {
        filename: 'dev-center.log',
        level: 'silly',
        maxsize: 102400,
        handleExceptions: true,
        timestamp: true
    };
    winston.exitOnError = false;

    return new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(consoleConfig),
            new (winston.transports.File)(fileConfig)
        ]
    });
}

function getStream () {
    return {
        write: function(message, encoding){
            module.exports.logger.info(message);
        }
    }
}
