var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');





const Exam=require('./models/Exam');

var api=require('./routes/api/index');

var app = express();




//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://RithvikS:capstone123@cluster0.m8kbi.mongodb.net/myFirstDatabase?retryWrites=true&w=ma';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
.then((result)=>console.log('connected to rithviks  db'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup

app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',api);

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

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

module.exports = app;
