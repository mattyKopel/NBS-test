//const data = require('./dataModel');
const bodyParser = require('body-parser')
const main = require('./classes/main');
const express = require('express');
const router = express.Router();

router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

router.use(express.json());

router.get('/distance', function (req, res) {
  return main.mainProccess(req, res);
});

module.exports = router;
