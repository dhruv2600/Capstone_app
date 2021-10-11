var express = require('express');

var router = express.Router({mergeParams: true});
const fs=require('fs');
const csv=require('fast-csv');
var exam_controller =require('../controller/examcontroller')

var Course = require('../models/Courses');

const multer  = require('multer')

const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

//router.get('/',exam_controller.exam_index);

//router.get('/add_exam',exam_controller.add_exam);

const csvStream=csv.format({headers:true});


const { EOL } = require('os');
const { parse } = require('fast-csv');

const Exam=require('../models/Exam');

var paperouter=require('./papers');

//router.get('/q_form',exam_controller.q_form);




router.route('/')
.get(function(req,res){
  Course.findOne({'_id':req.params.cid})
  .populate('exams')
  .exec(function (err, list_courses) {
      //Successful, so render
     res.send(list_courses.exams);
    });
})
.post(upload.fields([{name:'csvfile',maxCount:1},{name:'src',maxCount:1}]),function(req,res,next){

  var dataArr=[];

  const stream = parse({ headers: true })
.on('data', data=>{
    //console.log(data);
    dataArr.push(data);
})
.on('end', rowCount => {
    console.log(dataArr)
    var resObj=[];
    for(var i=0;i<dataArr.length;i++)
    {
        var temp={
            qname:dataArr[i].Question,
            right_answers:dataArr[i].RightAns,
            fullmarks:dataArr[i].Fullmarks
        }
        resObj.push(temp);
    }
    const exam= new Exam({
      title:req.body.title,
      questions: resObj,
      material:sourcemat,
      //duration:req.body.duration,
      //dateofexam:req.body.timeofexam
    })
    exam.save()
    .then((result)=>{
      Course.findOne({'_id':req.params.cid})
    .exec(function (err, course) {
      if (err) { return next(err); }
      //Successful, so render
      console.log(result._id);
      course.exams.push(result._id);
      course.save();
      console.log(course);
      res.send("ADDED EXAM SUCCESSFULLY");
    });

    })
    .catch((error)=>{console.log(error)});
  });


  let b1 =req.files['csvfile'][0];
  var sourcemat =req.files['src'][0]['buffer'].toString();
  stream.write(b1['buffer'].toString());
  stream.end();
  //res.send(req.file["buffer"].toString());
  console.log(req.body.title);
});

router.route('/:eid')
.get(exam_controller.exam_deets)
.post()

router.use('/:eid/papers',paperouter);

module.exports = router;

