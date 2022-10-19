const express = require('express');

const noteRouter = require('./noteRouter.js')

const app = express();

app.use('/notes', noteRouter);

module.exports = app;