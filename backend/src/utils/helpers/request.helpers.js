const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const getCorrelationId = () => {
    const asyncStore = asyncLocalStorage.getStore();
    if (!asyncStore) {
        return 'unknown-error-while-creating-correlation-id';
    }
    return asyncStore.correlationId;
};

module.exports = { asyncLocalStorage, getCorrelationId };
