var Course = require('../models/Courses');

var User=require('../models/User');

var Paper=require('../models/Papers');

var Exam=require('../models/Exam');

var University=require('../models/University');

var fs = require("fs");

/* csv to json */


// Display list of all Authors.
var async=require('async');

exports.exam_index=function(req,res){
    res.send("welcome to exam adding page");
}
exports.add_exam=function(req,res){
    res.render('add_exam');
}

exports.add_form=function(req,res){
    
    console.log(req.files);
    res.send(req);

}
exports.exam_deets=function(req,res){
    Exam.find({'_id':req.params.eid})
    .exec(function(err,req_doc){
        res.send(req_doc)
    })
}

