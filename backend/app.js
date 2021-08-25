var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var examrouter=require('./api/resources/Exam_add');

var courserouter=require('./controller/update_controllers/createcourses');

var paperrouter=require('./api/resources/Paper_add');

var examdisplayer=require('./controller/read_controllers/getexams');

var univrouter=require('./controller/update_controllers/createuniv');

var usersRouter=require('./controller/update_controllers/createuser');


const Exam=require('./models/Exam');

var app = express();


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://root-1:dhruv1978@cluster0.qshzo.mongodb.net/autocorrector_app?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
.then((result)=>console.log('connected to the db'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/api/exam',examrouter);
app.use('/course',courserouter);
app.use('/api/paper',paperrouter);
app.use('/', indexRouter);

app.use('/univeradd',univrouter);

app.use('/test',examdisplayer);

app.use('/userss',usersRouter);

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
