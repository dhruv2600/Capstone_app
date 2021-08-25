var express = require('express');
var router = express.Router();
const Exam=require('../../models/Exam.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOu have entered the api page' });
});

var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://root-1:dhruv1978@cluster0.qshzo.mongodb.net/autocorrector_app?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
.then((result)=>console.log('connected to the db'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
