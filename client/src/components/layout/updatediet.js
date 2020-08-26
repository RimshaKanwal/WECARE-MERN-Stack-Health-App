import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	Button,
	Form,
	Col,
	Row,
	Container,
	Card,
	Jumbotron,
	ListGroup,
	ListGroupItem,
	Tabs,
	Tab,
	Sonnet,
	Table,
} from 'react-bootstrap';
// calorie: '',
// breakfast: '',
// lunch: '',
// snack: '',
// dinner: '',
const Updatediet = (props) => {
	const [formData, setFormData] = useState({});
	const [test, setTest] = useState('');
	const { _id, calorie, breakfast, lunch, snack, dinner } = formData;
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	useEffect(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const myParam = urlParams.get('id');
		const response = await fetch('http://localhost:1000/api/diet/a/' + myParam);
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}
		// var plan = {
		// 	calorie: body[0].calorie,
		// 	breakfast: body[0].breakfast,
		// 	lunch: body[0].lunch,
		// 	snack: body[0].snack,
		// 	dinner: body[0].dinner,
		// };
		setTest('test');
		setFormData(body[0]);
		// return body;
		// console.log(body[0]);
	}, []);
	const onSubmit = async (e) => {
		e.preventDefault();
		const newPlan = {
			_id,
			calorie,
			breakfast,
			lunch,
			snack,
			dinner,
		};
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const body = JSON.stringify(newPlan);
			console.log(body);
			const res = await axios.post('/api/diet/update_diet', body, config);
			console.log(res.data);
			localStorage.setItem('jwtToken', res.data);
			alert('plan Updated');
			// window.location.href="http://localhost:3000/Home"
		} catch (err) {
			console.error(err.response.data);
		}
	};
	return (
		<Fragment>
			<br />
			<Container>
				<Row>
					<Col sm='3'></Col>
					<Col>
						<h1 className='large text-info'>
							<b>Update Diet Plans</b>
						</h1>
						<p className='lead'>
							<i class='far fa-plus-square'></i> Update diet plans in database.
						</p>
						<form className='form' onSubmit={(e) => onSubmit(e)}>
							<div className='form-group'>
								<input
									type='number'
									placeholder='Number of calories'
									name='calorie'
									value={calorie}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									placeholder='Breakfast items'
									name='breakfast'
									value={breakfast}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									placeholder='Lunch items'
									name='lunch'
									value={lunch}
									onChange={(e) => onChange(e)}
									minLength='6'
								/>
							</div>

							<div className='form-group'>
								<input
									type='text'
									placeholder='Snacks item'
									name='snack'
									value={snack}
									onChange={(e) => onChange(e)}
									minLength='6'
								/>
							</div>

							<div className='form-group'>
								<input
									type='text'
									placeholder='Dinner items'
									name='dinner'
									value={dinner}
									onChange={(e) => onChange(e)}
									minLength='6'
								/>
							</div>

							<center>
								<b>
									<input
										style={{ width: '16em' }}
										type='submit'
										className='btn btn-info'
										value='Update'
									/>
								</b>
							</center>
						</form>
						<p className='my-1'></p>
					</Col>
					<Col sm='3'></Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Updatediet;
