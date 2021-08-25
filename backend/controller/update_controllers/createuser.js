var express = require('express');
var router = express.Router();
const User=require('../../models/User.js');

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


module.exports = router;
