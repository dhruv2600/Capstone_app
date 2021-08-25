var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
  {
    name: {type: String, required: true},
    hod:{type:Schema.Types.ObjectId , ref:'User' , required:false},
    exams:[{type: Schema.Types.ObjectId, ref: 'exams', required:false}],
    courseinfo:{type:String},
  },
);

// Virtual for book's URL


//Export model
module.exports = mongoose.model('Course', CourseSchema);