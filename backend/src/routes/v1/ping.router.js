const express = require('express');

const { pingController } = require('../../controllers/ping.controller');
const { validateRequestBody } = require('../../validators');
const { pingSchema } = require('../../validators/ping.schema');

const pingRouter = express.Router();
pingRouter.get('/', validateRequestBody(pingSchema), pingController);

module.exports = pingRouter;
