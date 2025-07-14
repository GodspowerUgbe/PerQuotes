const express = require('express');
const path = require('path');

const clientRouter = require('./routes/clientRouter.js');
const apiRouter = require('./routes/apiRouter.js');
const {
    serverErrHandler,
    error404
} = require('./routes/error.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'..', 'public')));

app.use('/', clientRouter);
app.use('/api', apiRouter);

app.use(serverErrHandler);

module.exports = app;