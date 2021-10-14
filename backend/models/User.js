var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courses=require('./Courses');

var Universities=require('./University');

var UserSchema = new Schema(
  {
    name: {type: String, required: true},
    email:{type:String, required:true},
    password:{type: String, required: true},
    teacher:{type :Number}, //change it to either of 3 strings
    univ:{type: Schema.Types.ObjectId, ref: Universities, required: false},
    srn:{type: String,required:false},
    courses:[{type: Schema.Types.ObjectId, ref: courses, required: false}]
    
  }
);

// Virtual for book's URL

//Export model
module.exports = mongoose.model('User', UserSchema);