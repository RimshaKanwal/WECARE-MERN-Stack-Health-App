const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const Exercise = require('../../models/exercise');
const config = require('config');

var setpermission = function(req, res, next) {
	res.setHeader('Access-Control-Allow-Methods', '*');

	res.setHeader('Access-Control-Allow-Origin', '*');

	//        res.setHeader('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type,Authentication,Accept')
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
};
router.get('/', function(req, res, next) {
	Exercise.find()
		.sort('name')
		.exec(function(error, results) {
			if (error) {
				return next(error);
			}
			res.json(results);
		});
});

router.post('/add', function(req, res, next) {
	exer = new Exercise();
	exer.name = req.body.name;
	exer.use = req.body.use;
	exer.description = req.body.description;
	exer.save(function(error, results) {
		if (error) {
			return next(error);
		}
		// Respond with valid data
		res.json(results);
	});
});

router.post('/delexercise', async (req, res) => {
	try {
		console.log('request received');

		await Exercise.findOneAndDelete({ name: req.body.name });

		res.end('Exercise deleted');
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

// router.delete('/delexercise:name', setpermission, function(req, res, next) {
// 	ename = req.params.name;
// 	Exercise.deleteOne({ name: ename }, function(error, results) {
// 		if (error) {
// 			return next(error);
// 		}
// 		// Respond with valid data
// 		res.json(results);
// 	});
// });

router.get('/exercise/:name', function(req, res, next) {
	Employee.findOne({
		name: req.params.name
	})
		.populate('Exercise')
		.exec(function(error, results) {
			if (error) {
				return next(error);
			}
			// If valid user was not found, send 404
			if (!results) {
				res.status(404).send('No Record Found');
			} else {
				// Respond with valid data
				res.json(results);
			}
		});
});

router.post('/getExercise', async (req, res) => {
	try {
		console.log('request received');

		const officer = await Exercise.find({ name: req.body.name }).select('-_id');

		res.json(officer);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});
router.post('/updateExercise', async (req, res) => {
	try {
		console.log('request received');

		const officer = await Exercise.findOneAndUpdate(
			{ name: req.body.name },
			{
				name: req.body.name,
				use: req.body.use,
				description: req.body.description
			}
		);

		res.end('officer Updated');
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
