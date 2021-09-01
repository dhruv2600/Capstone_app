express= require('express');

var app = express();

var router = express.Router();

var api = require('../../routes/api/index');

var indexRouter = require('../../routes/index');

var usersRouter = require('../../routes/users');

var examrouter=require('../../api/resources/Exam_add');

var courserouter=require('../../routes/courses');

var paperrouter=require('../../api/resources/Paper_add');

var examdisplayer=require('../../controller/read_controllers/getexams');

var univrouter=require('../../controller/update_controllers/createuniv');

var usersRouter=require('../../controller/update_controllers/createuser');

router.get('/users', usersRouter);
router.get('/api/exam',examrouter);

router.get('/api/paper',paperrouter);
router.get('/', indexRouter);

router.get('/univeradd',univrouter);

router.get('/test',examdisplayer);

router.get('/userss',usersRouter);

router.use('/cou_v1',courserouter);

module.exports=router;