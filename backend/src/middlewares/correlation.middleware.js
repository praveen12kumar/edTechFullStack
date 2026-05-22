const { v4: uuidV4 } = require('uuid');

const { asyncLocalStorage } = require('../utils/helpers/request.helpers');

const attachCorrelationIdMiddleware = (req, res, next) => {
    const correlationId = uuidV4();

    req.headers['X-correlation-ID'] = correlationId;

    asyncLocalStorage.run(
        {
            correlationId: correlationId,
        },
        () => {
            next();
        }
    );
};

module.exports = { attachCorrelationIdMiddleware };
