var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PaperSchema = new Schema(
  {
    title: {type: String, required: true},
    answers:[ {type:String} ],
    studentID:{type:Schema.Types.ObjectId, ref: 'User'},
    time:{type: Date, required: false},
    marks:{type:Number},
    name:{type:String}
  }
);

// Virtual for book's URL
/*ExamSchema
.virtual('url')
.get(function () {
  return '/catalog/exam/' + this._id;
});*/

//Export model
module.exports = mongoose.model('Paper', PaperSchema);