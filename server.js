const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//DB Config
const db = require('./config/key').mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log('Mongo Connected...');
	})
	.catch((err) => console.log(err));

//Use Routers
app.use('/api/User', require('./routes/api/User'));

app.use('/api/Auth', require('./routes/api/Auth'));
app.use('/api/Pollution', require('./routes/api/Pollution'));
app.use('/api/Disease', require('./routes/api/Disease'));
app.use('/api/Exercise', require('./routes/api/Exercise'));
app.use('/api/CurrentTrends', require('./routes/api/currenttrend'));
app.use('/api/charts', require('./routes/api/charts_ct'));
app.use('/api/Admin', require('./routes/api/Admin'));
app.use('/api/AuthAdmin', require('./routes/api/AuthAdmin'));

app.listen(1000, () => {
	console.log('Server started on port 1000');
});
