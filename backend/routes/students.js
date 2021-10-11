var express = require('express');
var router = express.Router({mergeParams: true});

// Require controller modules.
var student_controller = require('../controller/studentcontroller');

var courserouter=require('./courses');


router.route('/')
.get(student_controller.course_list)   // displays all courses
.post()

router.route('/:id')  //returns the student documment
.get(student_controller.student_doc);



router.use('/:id/courses',courserouter);

module.exports = router;