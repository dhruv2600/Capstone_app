var express = require('express');
var router = express.Router();
const Course=require('../../models/Courses.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page FOR Courses' });
});


router.get('/add_course',(req,res)=>{

  const course= new Course({
    name:'NLP',
    Teachers: ['61237f03a0aa7e51845c6b11'],
    Students:['61237ea003989206149e8eff'],
    material: 'to be added',
    Univname:'PES University'

  })
  course.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{console.log(error)});
})


module.exports = router;
