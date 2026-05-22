const logger = require('../config/logger');
const { InternalServerError } = require('../utils/errors/app.error');

const pingController = async (req, res) => {
    try {
        logger.info('Ping request received');
        res.status(200).json({
            message: 'Server is up and running',
            success: true,
        });
    } catch (error) {
        throw new InternalServerError(error.message);
    }
};

module.exports = { pingController };
