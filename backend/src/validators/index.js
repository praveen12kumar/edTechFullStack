const logger = require('../config/logger');

/**
 * @param {import('zod').ZodObject} Schema - Zod schema to validate the request body
 * @returns {Function} middleware function to validate the request body
 */
const validateRequestBody = (Schema) => {
    return async (req, res, next) => {
        try {
            logger.info('Validating request body');
            await Schema.parseAsync(req.body);
            logger.info('Request body validation successful');
            next();
        } catch (error) {
            return res.status(400).json({
                message: 'Invalid request body',
                success: false,
                error: error,
            });
        }
    };
};

/**
 * @param {import('zod').ZodObject} Schema - Zod schema to validate the query params
 * @returns {Function} middleware function to validate the query params
 */
const validateQueryParams = (Schema) => {
    return async (req, res, next) => {
        try {
            logger.info('Validating query params');
            await Schema.parseAsync(req.query);
            logger.info('Query params validation successful');
            next();
        } catch (error) {
            return res.status(400).json({
                message: 'Invalid query params',
                success: false,
                error: error,
            });
        }
    };
};

module.exports = { validateRequestBody, validateQueryParams };
