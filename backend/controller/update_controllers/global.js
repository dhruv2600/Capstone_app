var express = require('express');

var router = express.Router();

const Univ=require('../../models/University.js');

const Course=require('../../models/Courses.js');

const User=require('../../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page FOR UNIVERSITY' });
});


router.get('/add_univ',(req,res)=>{

  const univ= new Univ({
    name:'Bangalore University',
  })
  univ.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{console.log(error)});
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page FOR User' });
});


router.get('/add_user',(req,res)=>{

  const user= new User({
    name:'AARTI',
    email:'AARTI@gmail.com',
    password:'hashing',
    teacher: 1,
    Univ:'PES University'

  })
  user.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{console.log(error)});
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page FOR Courses' });
});


router.get('/add_course',(req,res)=>{

  const course= new Course({
    name:'TDL',
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
