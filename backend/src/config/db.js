const mongoose = require('mongoose');
const { serverConfig } = require('./serverConfig');
const logger = require('./logger');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${serverConfig.MONGO_URL}`);
        logger.info(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Server is connected on host: ${conn.connection.host}`);
    } catch (error) {
        console.log('something went wrong', error);
        logger.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
