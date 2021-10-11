var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exams=require('./Exam');

var users=require('./User');

var CourseSchema = new Schema(
  {
    name: {type: String, required: true},
    hod:{type:Schema.Types.ObjectId , ref: users , required:false},
    exams:[{type: Schema.Types.ObjectId, ref: exams, required:false}],
    courseinfo:{type:String},
  },
);

// Virtual for book's URL


//Export model
module.exports = mongoose.model('Course', CourseSchema);