var Course = require('../models/Courses');

var User=require('../models/User');

var Paper=require('../models/Papers');

var Exam=require('../models/Exam');

var University=require('../models/University');

// Display list of all Authors.
var async=require('async');
exports.student_doc = function(req, res) {
    
    User.findOne({'_id':req.params.id})
    .populate('courses')
    .exec(function (err, list_courses) {
        //Successful, so render
       res.send(list_courses)
      });
};
exports.course_list = function(req, res) {
    Course.find({}, 'name ')
    .exec(function (err, list_courses) {
      if (err) { return next(err); }
      //Successful, so render
      console.log(list_courses);
      
      res.send(list_courses);
    });
};