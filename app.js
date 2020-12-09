const express = require('express');
const app = express();

const bodyParser = require('body-parser');


const user_router = require('./Api/routes/user_router'); /// router handeling login 


// parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
//// cors access
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

//// routes
app.use('/user', user_router);

/// error control
app.use((req, res, next) => {
  const err = new Error('trying to acces an unhandeled route');
  err.status = 404;
  next(err);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      kk: 'vfvdfbfbfb'
    }
  });
});

module.exports = app;
