var Course = require('../models/Courses');

var User=require('../models/User');

var Paper=require('../models/Papers');

var Exam=require('../models/Exam');

var University=require('../models/University');



// Display list of all Authors.
var async=require('async');



exports.course_index=function(req,res){

    User.findOne({'_id':req.params.id})
    .populate('courses')
    .exec(function (err, list_courses) {
        //Successful, so render
       res.send(list_courses.courses);
      });

};



exports.course_list = function(req, res) {
    Course.find({}, 'name ')
    .populate('Students')
    .exec(function (err, list_courses) {
      if (err) { return next(err); }
      //Successful, so render
      console.log(list_courses);
      
      res.send(list_courses);
    });
};

// Display detail page for a specific Author. //user/id return the full user document
                                               //courses/cid -> course details
                                                //exam de tails


exports.course_deets=function(req,res){



    Course.findOne({'_id':req.params.cid})
    .exec(function(err,req_doc){
        res.send(req_doc);
    })

}


exports.course_detail = function(req, res) {
    
    User.findOne({'_id':req.params.id})
    .populate('courses')
    
    .exec(function (err, list_courses) {
        
        //Successful, so render
        var data=[];
        console.log(list_courses.courses[1]);
        for(let i=0;i<list_courses.courses.length;i++) {
            data.push({
                'name':list_courses.courses[i].name,
                'id':list_courses.courses[i]._id
            });
        }
        console.log(data);
        res.send(data);
      });
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
    
   
    User.findOne({'_id':req.params.id})
    .populate('courses')
    .exec(function (err, list_courses) {
        
        //Successful, so render
        var data=[];
        console.log(list_courses);
        console.log(list_courses.courses[0].users)
        for(let i=0;i<list_courses.courses.length;i++) {
            data.push({
                'name':list_courses.courses[i].name,
                'id':list_courses.courses[i]._id
            });
        }
        res.send(list_courses.courses);
      });
    
}