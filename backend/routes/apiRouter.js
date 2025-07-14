const express = require('express');

const {
    getQuoteByAuthor,
    getQuotesByCategory,
    getRandomQuotes} = require('../controllers/apiControllers.js');

const apiRouter = express.Router();

apiRouter.get('/author/:id',getQuoteByAuthor).
    get('/category/:id',getQuotesByCategory).
    get('/random',getRandomQuotes);

module.exports = apiRouter;