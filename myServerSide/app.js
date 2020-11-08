const express = require('express');
const gotoGoogle = require('./classes/gotoGoogle');
const DBRequest = require('./classes/DBRequests')
const routes = require('./router');

const app = express();

const port = 3000;

app.use('/',routes);

//DBRequest.connectToDB();
//DBRequest.createTable();

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('My Node App on port 8080...');
});
