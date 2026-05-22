// This file handles the server configuration
const dotenv = require('dotenv');
dotenv.config();

const serverConfig = {
    PORT: Number(process.env.PORT) || 3000,
};

module.exports = { serverConfig };
