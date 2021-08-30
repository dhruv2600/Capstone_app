var express = require('express');
var router = express.Router();
const Exam=require('../../models/Exam.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page' });
});



router.get('/add_Exam',(req,res)=>{

  const exam= new Exam({
    title:'Operating Systems',
    material:'Lets go',
    questions:['Hello',1,'there',1]
  })
  exam.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{console.log(error)});
})


module.exports = router;
