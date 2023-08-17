var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql=require('mysql');
const db = require('./database/sql.js');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var newTicketRouter = require('./routes/newTicket');
var initiateTicketRouter = require('./routes/initiateTicket');
var pendingTicketRouter = require('./routes/pendingTicket');
var forwardedTicketRouter = require('./routes/forwardTicket');
var rejectedTicketRouter = require('./routes/rejectedTicket');
var closedTicketRouter = require('./routes/closedTicket');
var updateTicketRouter = require('./routes/updateTicket');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/newTicket', newTicketRouter);
app.use('/initiateTicket', initiateTicketRouter);
app.use('/pendingTicket', pendingTicketRouter);
app.use('/forwardedTicket', forwardedTicketRouter);
app.use('/rejectedTicket', rejectedTicketRouter);
app.use('/closedTicket', closedTicketRouter);
app.use('/updateTicket', updateTicketRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
