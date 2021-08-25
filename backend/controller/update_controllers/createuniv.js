var express = require('express');
var router = express.Router();
const Univ=require('../../models/University.js');

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


module.exports = router;
