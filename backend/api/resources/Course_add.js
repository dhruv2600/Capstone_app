var express = require('express');
var router = express.Router();
const Course=require('../../models/Courses.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page' });
});
z

router.get('/add_Course',(req,res)=>{

  const course= new Course({
    name:'Operating Systems',
    material:['OS is the best subject ever made']
  })
  course.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{console.log(error)});
})


module.exports = router;
