const express = require('express');
const router = express.Router();
const Diet = require('../../models/dietplan');

// const config = require('config');
// var multer = require('multer');

router.post('/', async (req, res) => {
	const { calorie, breakfast, lunch, snack, dinner } = req.body;
	try {
		diet = new Diet({
			calorie: req.body.calorie,
			breakfast: req.body.breakfast,
			lunch: req.body.lunch,
			snack: req.body.snack,
			dinner: req.body.dinner,
		});
		diet.save();
		res.json(diet);
		console.log(diet);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
		return;
	}
});

router.get('/', async (req, res) => {
	try {
		const diet = await Diet.find();
		res.json(diet);
	} catch (error) {
		console.log(error);
	}
});

router.get('/', async (req, res) => {
	try {
		const diet = await Diet.find();
		res.json(diet);
	} catch (error) {
		console.log(error);
	}
});
////////////////////////////

router.post('/get_calorie', async (req, res) => {
	console.log('Diest Request Received');
	let plan_array = [];
	try {
		const diet = await Diet.find();

		diet.map((item) => {
			let closest_cal = Math.abs(item.calorie - req.body.calorie);
			plan_array.push({
				_id: item._id,
				calorie: item.calorie,
				breakfast: item.breakfast,
				lunch: item.lunch,
				snack: item.snack,
				dinner: item.dinner,
				closest_cal: closest_cal,
			});
		});

		plan_array.sort(function (a, b) {
			return a.closest_cal - b.closest_cal;
		});

		res.json(plan_array[0]);
	} catch (error) {
		console.log(error);
	}
});

///////////////////

router.get('/calorie', async (req, res) => {
	try {
		let diet = await Diet.findOne({ calorie });
		if (diet) {
			res.json(diet);
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});
////////skype
router.post('/update_diet', async (req, res) => {
	try {
		diet = new Diet({
			calorie: req.body.calorie,
			breakfast: req.body.breakfast,
			lunch: req.body.lunch,
			snack: req.body.snack,
			dinner: req.body.dinner,
		});
		Diet.findOneAndUpdate(
			{ _id: req.body._id },
			{
				calorie: req.body.calorie,
				breakfast: req.body.breakfast,
				lunch: req.body.lunch,
				snack: req.body.snack,
				dinner: req.body.dinner,
			},
			function (error, results) {
				if (error) {
					return next(error);
				}
			}
		);
		res.json(diet);
		console.log(diet);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
		return;
	}
});
///Deleteee
router.delete('/del_diet', function (req, res, next) {
	did = req.body.id;
	Diet.deleteOne({ _id: did }, function (error, results) {
		if (error) {
			return next(error);
		}
		// Respond with valid data
		res.json(results);
	});
});

router.post('/get_id', async (req, res) => {
	// id = req.body._id;
	console.log(req.body);
	res.json(req.body);
});
router.get('/a/:id', function (req, res, next) {
	const query = req.params.id;
	console.log(query);
	Diet.find({
		_id: query,
	})
		.populate('Diet')
		.exec(function (error, results) {
			if (error) {
				return next(error);
			}
			// If valid user was not found, send 404
			if (!results) {
				res.status(404).send('No Record Found');
			} else {
				// Respond with valid data
				res.json(results);
				console.log(results);
			}
		});
});

module.exports = router;
