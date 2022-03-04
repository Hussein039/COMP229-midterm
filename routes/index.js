/*
  movie.js
  Hussein Hussein
  301017560
  Movie List
*/
var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

module.exports = router;
