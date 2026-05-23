// This file handles the server configuration
const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URL: process.env.MONGO_URL,
};

module.exports = { serverConfig };
