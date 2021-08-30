var Course = require('../models/Courses');

var User=require('../models/User');

var Paper=require('../models/Papers');

var Exam=require('../models/Exam');

var University=require('../models/University');

// Display list of all Authors.
var async=require('async');


exports.course_index=function(req,res){

    async.parallel({
        c_count: function(callback) {
            Course.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        p_count: function(callback) {
            Paper.countDocuments({}, callback);
        },
        e_count: function(callback) {
            Exam.countDocuments({status:'Available'}, callback);
        },
        u_count: function(callback) {
            User.countDocuments({}, callback);
        },
        un_count: function(callback) {
            University.countDocuments({}, callback);
        }
    }, function(err, results) {
        console.log(results);
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

exports.course_list = function(req, res) {
    Course.find({}, 'name ')
    .populate('Students')
    .exec(function (err, list_courses) {
      if (err) { return next(err); }
      //Successful, so render
      console.log(list_courses);
      
      res.render('course_list', { title: 'Book List', course_list: list_courses });
    });


};

// Display detail page for a specific Author.
exports.course_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: course detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.course_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: course create GET');
};

// Handle Author create on POST.
exports.course_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: course create POST');
};

// Display Author delete form on GET.
exports.course_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: course delete GET');
};

// Handle Author delete on POST.
exports.course_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: course delete POST');
};

// Display Author update form on GET.
exports.course_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: course update GET');
};

// Handle Author update on POST.
exports.course_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: course update POST');
};

exports.course_user= function(req, res) {
    
   
    User.findOne({'_id':req.param.id},'name')
    .exec(function (err, list_courses) {
        if (err) { console.log("error"); return next(err); }
        //Successful, so render
        console.log(list_courses);
        
        res.send("HELLO THERE");
      });
    
}