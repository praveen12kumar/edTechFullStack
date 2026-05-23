const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const express = require('express');

const logger = require('./config/logger');
const { serverConfig } = require('./config/serverConfig');
const { attachCorrelationIdMiddleware } = require('./middlewares/correlation.middleware');
const { genericErrorHandler } = require('./middlewares/errorMiddleware');
const apiRouter = require('./routes');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();

app.use(attachCorrelationIdMiddleware);

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter);

/**
 * Add the error handler middleware
 */
app.use(genericErrorHandler);

// Start server
app.listen(serverConfig.PORT, () => {
    logger.info('Server is running on port', { PORT: serverConfig.PORT });
    connectDB();
});

module.exports = app;
