const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},

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
module.exports = user = mongoose.model('admin', AdminSchema);
