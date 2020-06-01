const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: false
  },
  mobilenumber: {
    type: Number,
    required: false
  },
  dateofbirth: {
    type: Date,
    required: false
  }

  //   alert:[
  //       {
  //         user: {
  //             type: Schema.Types.ObjectId,
  //             ref: 'users'
  //           },

  //           name: {
  //             type: String
  //           },
  //     location:{
  //         type:String

  //     }
  //     }
  //   ],

  //   history:[
  //       {
  //           history{
  //               type:
  //           }
  //       }
  //   ]
});
module.exports = user = mongoose.model('user', UserSchema);
