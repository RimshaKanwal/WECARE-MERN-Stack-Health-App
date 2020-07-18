import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	Form,
	Col,
	Row,
	Container,
	Button,
	Dropdown,
	Jumbotron,
	Card,
	Badge,
	Table,
	Carousel,
	Spinner,
} from 'react-bootstrap';

//import Navbar from '../layout/Navbar';
const Admin = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('SUCCESSFUL');
		const newAdmin = {
			email,
			password,
		};
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const body = JSON.stringify(newAdmin);

			const res = await axios.post('/api/AuthAdmin', body, config);
			console.log(res.data);
			localStorage.setItem('jwtToken', res.data);
			window.location.href = 'http://localhost:3000/HomeAdmin';
		} catch (err) {
			console.error(err.response.data);
		}
	};

	return (
		<Fragment>
			<Container>
				<Row>
					<Col sm={3}></Col>
					<Col>
						<br />
						<h1 className='large text-danger'>Admin Panel</h1>

						<p className='lead'>
							<i className='fas fa-user'></i> Login to your Admin Account
						</p>

						<form className='form' onSubmit={(e) => onSubmit(e)}>
							<div className='form-group'>
								<input
									type='email'
									placeholder='Email Address'
									name='email'
									value={email}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='password'
									placeholder='Password'
									name='password'
									value={password}
									onChange={(e) => onChange(e)}
									minLength='6'
								/>
							</div>

							<center>
								<input
									type='submit'
									style={{ width: '15em' }}
									className='btn btn-danger'
									value='Login'
								/>
							</center>
						</form>
					</Col>
					<Col sm={3}></Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Admin;
