var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var paper=require('./Papers');

var ExamSchema = new Schema(
  {
    title: {type: String, required: true},
    material: {type:String},
    questions: [
      {
        qname:{type:String,required:true},
        fullmarks:{type:Number,required:true},
        right_answers:{type:String,required:false}
      }
    ],    
    student_answers:[{type:Schema.Types.ObjectId,ref:paper,required: false}],
    duration:{type: Number,required:false},
    dateofexam : { type : Date, default: Date.now } //make it automatic
  },
);

// Virtual for book's URL
/*ExamSchema
.virtual('url')
.get(function () {
  return '/catalog/exam/' + this._id;
});*/

//Export model
module.exports = mongoose.model('Exam', ExamSchema);