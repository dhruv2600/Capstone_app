var express = require('express');
var router = express.Router();

// Require controller modules.
var course_controller = require('../controller/coursecontroller');

var exam_router=require('./exams');


const fs=require('fs');
const csv=require('fast-csv');
var exam_controller =require('../controller/examcontroller')

var Course = require('../models/Courses');

const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const csvStream=csv.format({headers:true});


const { EOL } = require('os');
const { parse } = require('fast-csv');

const Exam=require('../models/Exam');

const Paper=require('../models/Papers');



router.route('/')
.get(function(req,res){
    console.log("hello");
    res.send("welcome to paper routing page");
})
.post(upload.single('papers'),function(req,res,next){

    var dataArr=[];
    const stream=parse({headers:true})
    .on('data',data=>{dataArr.push(data)})
    .on('end',v=>{
        console.log("parsing ended");
        console.log(dataArr);
        for(var i=0;i<dataArr.length;i++)
        {
            var paper=new Paper({
                title:dataArr[i].title,
                marks:dataArr[i].marks,
                answers:dataArr[i].Answers,
                name:dataArr[i].student_name
            });
            paper.save().then(savedDoc=>{
                res.send("paper saved");
            })
        }
    })
    let f=req.file;
    let data=f['buffer'].toString();
    stream.write(data);
    stream.end();
    console.log('thanks for coming');
})

router.route('/yo')
.get(function(req,res){
    res.send("yo");
})

module.exports=router;