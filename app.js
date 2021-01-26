const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const compress = require('compression');
const methodOverride = require('method-override');
const helmet = require('helmet');
let passport = require('passport');
const cors = require('cors');
const winston = require('./config/winston');
const config = require('./config/app-config');
const port = config.port;
const env = config.env;
const expressValidation = require('express-validation');
const db = require('./models/index');
const chalk = require('chalk');
require('dotenv').config();
const response = require('./util/construct-response');


let app = express();

if (env !== 'development') {
  app.use(
    morgan('combined', {
      stream: winston.stream
    })
  );
}

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(compress());
app.use(methodOverride());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use(passport.initialize());
app.use(express.static('./public/'));

app.use('/v1', indexRouter);

// Validation Errors

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors
      .map(error => error.messages.join('. '))
      .join(' and ');
    response.error(res, 422, 'Validation Error', unifiedErrorMessage);
  } else if (err) {
    if (err.name === 'MulterError') {
      response.error(res, 400, 'File Upload Error', err.message);
    } else {
      response.error(res, 400, 'Bad Request', err.message);
      console.log(err.message);
    }
  } else {
    next();
  }
});

// catch 404 and forward to error handler

app.use('*', function(req, res) {
  response.error(
    res,
    404,
    'API not found',
    'API you tried to access does not exist with us. Retry to another route'
  );
});

db.sequelize
.sync
// Dev env only use with caution
// { force: true }
()
.then(() => {
  app.listen(port, () => {
    console.log(chalk.white.bgBlue.bold(` Connected to PostGRES `));
    console.log(
      chalk.white.bgGreen.bold(
        ` Fossil Interiors ${env} server started on http://127.0.0.1:${port}`
      )
    );
  });
})
.catch(derr => {
  console.info(`Database connection failed: ${derr}`);
});

module.exports = app;
