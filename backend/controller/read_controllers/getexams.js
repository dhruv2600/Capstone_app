var express = require('express');
var router = express.Router();
const Exam=require('../../models/Exam.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the place where exams are going to be displayed' });
});


router.get('/display_Exam/<id?',(req,res)=>{

    Exam.find({'title':'Operating Systems'},function(err,details){
        if(err){
            console.log(err);
        }
        res.render('index', { title:details});
    })
   

})


module.exports = router;
