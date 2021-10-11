express= require('express');

var app = express();

var router = express.Router({mergeParams: true});

var api = require('../../routes/api/index');

var indexRouter = require('../../routes/index');

var usersRouter = require('../../routes/students');

var examrouter=require('../../routes/exams');

var courserouter=require('../../routes/courses');


var paperRouter=require('../papers')



router.use('/user',usersRouter);


module.exports=router;