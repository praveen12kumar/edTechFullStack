const { AppError } = require('../utils/errors/app.error');

// eslint-disable-next-line no-unused-vars
const genericErrorHandler = (err, req, res, next) => {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || 'Internal server error';
    console.log('Error caught by generic error handler:', err);
    res.status(statusCode).json({
        message,
        success: false,
        statusCode,
    });
};

module.exports = { genericErrorHandler };
