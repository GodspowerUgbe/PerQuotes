const express = require('express');

const {
   index,about,contact,random
} = require('../middlewares/routes.js');
const clientRouter = express.Router();

clientRouter.get('/', index).
   get('/about', about).
   get('/random',random).
   get('/contact', contact);
   

module.exports = clientRouter;