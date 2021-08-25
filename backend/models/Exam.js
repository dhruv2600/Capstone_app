var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExamSchema = new Schema(
  {
    title: {type: String, required: true},
    material: {type:String},
    questions: [
      {
        qname:{type:String,required:true},
        fullmarks:{type:Number,required:true},
      }
    ],
    right_answers:[ {type:String} ],
    student_answers:[{type:Schema.Types.ObjectId,ref:'Paper',required: false}],
    time:{type: Date, required: false} //make it automatic
  }
);

// Virtual for book's URL
/*ExamSchema
.virtual('url')
.get(function () {
  return '/catalog/exam/' + this._id;
});*/

//Export model
module.exports = mongoose.model('Exam', ExamSchema);