const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const { getCorrelationId } = require('../utils/helpers/request.helpers');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }),
        winston.format.json(),
        // Custom print format with correlation ID
        winston.format.printf(({ level, message, timestamp, ...data }) => {
            const output = {
                level,
                message,
                timestamp,
                correlatedId: getCorrelationId(),
                data,
            };
            return JSON.stringify(output);
        })
    ),
    // Transports are the storage destinations for logs
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: 'logs/app-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '30d',
            maxSize: '20m',
        }),
    ],
});

module.exports = logger;
