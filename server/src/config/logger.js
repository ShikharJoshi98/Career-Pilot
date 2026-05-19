const winston = require("winston");
const config = require("./config");

const logger = winston.createLogger({
    level: config.LOG_LEVEL,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `[${timestamp}] [${level}] : ${message}`
        })
    ),
    transports: [new winston.transports.Console()]
});

module.exports = logger;