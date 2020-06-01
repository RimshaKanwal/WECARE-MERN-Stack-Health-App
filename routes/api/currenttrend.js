const express = require('express');
const router = express.Router();
let { PythonShell } = require('python-shell');

c = '';

router.post('/city', function (req, res, next) {
	console.log('request Receieved');
	const { city } = req.body;
	c = city;
	res.send('done');
});

router.get('/c', function (req, res, next) {
	console.log('this the callback api');

	var options = {
		mode: 'text',
		pythonOptions: ['-u'],
		scriptPath: 'E:/Mern-Projects/WECARE 2/WECARE/python',
		headers: { 'content-type': 'application/json' },
		args: c,
	};
	PythonShell.run('charts_ct.py', options, function (err, results) {
		if (err) throw err;
		res.send({ express: results });
	});
});

router.get('/', function (req, res, next) {
	console.log('this the callback api');

	var options = {
		mode: 'text',
		pythonOptions: ['-u'],
		scriptPath: 'E:/Mern-Projects/WECARE 2/WECARE/python',
		headers: { 'content-type': 'application/json' },
	};
	PythonShell.run('current_trends.py', options, function (err, results) {
		if (err) throw err;
		res.send({ express: results });
	});
});

router.get('/chart', function (req, res, next) {
	console.log('this the callback api');

	var options = {
		mode: 'text',
		pythonOptions: ['-u'],
		scriptPath: 'E:/Mern-Projects/WECARE 2/WECARE/python',
		headers: { 'content-type': 'application/json' },
	};

	PythonShell.run('charts_ct.py', options, function (err, results) {
		if (err) throw err;
		res.send({ express: results });
	});
});

module.exports = router;
