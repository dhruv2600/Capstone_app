var express = require("express");
var router = express.Router();

// Require controller modules.
var course_controller = require("../controller/coursecontroller");

var exam_router = require("./exams");

const fs = require("fs");
const csv = require("fast-csv");
var exam_controller = require("../controller/examcontroller");

var Course = require("../models/Courses");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const csvStream = csv.format({ headers: true });

const { EOL } = require("os");
const { parse } = require("fast-csv");

const Exam = require("../models/Exam");

const User = require("../models/User");

const Paper = require("../models/Papers");

router
  .route("/")
  .get(function (req, res) {
    console.log("hello");
    console.log(req.params);
    res.send("welcome to paper routing page");
  })
  .post(upload.single("papers"), function (req, res, next) {
    var dataArr = [];
    const stream = parse({ headers: true })
      .on("data", (data) => {
        dataArr.push(data);
      })
      .on("end", (v) => {
        //console.log("parsing ended");
        //console.log(dataArr);
        var questionpatt = /Question[0-9]/i;

        for (var i = 0; i < dataArr.length; i++) {
          var questionslist = [];
          for (var key in dataArr[i]) {
            if (dataArr[0].hasOwnProperty(key)) {
              if (questionpatt.test(key)) {
                questionslist.push(dataArr[i][key]);
              }
            }
          }
          console.log(dataArr[i]);
          const answerslist = [];

          for (let i = 0; i < questionslist.length; i++) {
            const answersobj = new Object();
            answersobj.sans = questionslist[i];
            answersobj.marks_assigned = 0;
            answerslist.push(answersobj);
          }
          console.log(dataArr[i]);
          var id;
          User.find({'srn':dataArr[i].srn})
          .then(function(user,err){
            id=user._id;
          })
          //console.log(doc);
          var paper = new Paper({
            title: dataArr[i].title,
            marks: 0,
            answers: answerslist,
            name: dataArr[i].student_name,
            student_id:id
          });
          //console.log(paper);
          paper.save().then((savedDoc) => {
            //console.log(savedDoc);
            console.log("parameter below");
            console.log(req.params.eid);
          
        //res.send(savedDoc);
          });
        }
      });
    let f = req.file;
    let data = f["buffer"].toString();
    stream.write(data);
    stream.end();
    console.log("thanks for coming");
  });

router.route("/yoo").get(function (req, res) {
  console.log(req.params.eid);
  res.send("yo");
});

module.exports = router;
