var express = require('express');
var router = express.Router();
const Paper=require('../../models/Papers.js');

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

router.get('/add_Paper',(req,res)=>{

  const paper= new Paper({
    
    title:'Topics in Deep Learning',
    questions:['Hello',1,'there',1],
    answers:['Vanity','Greed','Gluttony']
  })
  paper.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{console.log(error)});
})


module.exports = router;
