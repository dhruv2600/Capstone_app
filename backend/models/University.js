var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UnivSchema = new Schema(
  {
    name: {type: String, required: true},
    admin: {type: Schema.Types.ObjectId, ref: 'User', required: false},
    user: [{type: Schema.Types.ObjectId, ref: 'User', required: false}],
    courses : [{type: Schema.Types.ObjectId, ref: 'Courses', required: false}]
  }
);

// Virtual for book's URL
UnivSchema
.virtual('url')
.get(function () {
  return '/catalog/uni/' + this._id;
});

//Export model
module.exports = mongoose.model('University', UnivSchema);