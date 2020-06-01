import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Navbar from '../layout/Navbar';
const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		console.log('SUCCESSFUL');
		const newUser = {
			email,
			password
		};
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const body = JSON.stringify(newUser);

			const res = await axios.post('/api/Auth', body, config);
			console.log(res.data);
			localStorage.setItem('jwtToken', res.data);
			window.location.href = 'http://localhost:3000/Home';
		} catch (err) {
			console.error(err.response.data);
		}
	};

	return (
		<Fragment>
			<h1 className='large text-primary'>Login</h1>

			<p className='lead'>
				<i className='fas fa-user'></i> Login to your Account
			</p>

			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={e => onChange(e)}
						minLength='6'
					/>
				</div>

				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='my-1'>
				Don't have an account? <Link to='/Register'>Sign Up</Link>
			</p>
		</Fragment>
	);
};

export default Login;
