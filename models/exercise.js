const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	use: {
		type: String,
		required: true,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});
module.exports = exercise = mongoose.model('exercise', ExerciseSchema);
