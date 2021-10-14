var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PaperSchema = new Schema(
  {
    title: {type: String, required: true},
    answers:[ {
      sans:{type:String},
     marks_assigned:{type:Number}
    }],
    studentID:{type:Schema.Types.ObjectId, ref: 'User'},
    time:{type: Date, required: false},
    marks:{type:Number},
    name:{type:String}
  }
);

//Export model
module.exports = mongoose.model('Paper', PaperSchema);