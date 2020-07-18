import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.PNG';
import {
	Form,
	FormControl,
	Col,
	Row,
	Container,
	Button,
	Dropdown,
} from 'react-bootstrap';
class Navbar extends Component {
	constructor() {
		super();
		this.logout = this.logout.bind(this);
	}
	logout() {
		localStorage.removeItem('jwtToken');
		window.location.href = 'http://localhost:3000/login';
	}

	render() {
		return (
			<nav className='navbar bg-dark-m'>
				<img src={logo} className='logowe' alt='logo' />

				<ul>
					<li>
						{(localStorage.getItem('jwtToken') != undefined ||
							localStorage.getItem('jwtToken') != null) && (
							<Link to='/Home'>
								Home <i class='fas fa-home'></i>
							</Link>
						)}
					</li>
					{/* <li>
						{(localStorage.getItem('jwtToken') != undefined ||
							localStorage.getItem('jwtToken') != null) && (
							<Link to='!#'>
								Settings <i class='fas fa-cogs'></i>
							</Link>
						)}
					</li> */}
					<li>
						{(localStorage.getItem('jwtToken') != undefined ||
							localStorage.getItem('jwtToken') != null) && (
							<Link to='!#' onClick={this.logout}>
								Logout <i class='fas fa-sign-out-alt'></i>
							</Link>
						)}
					</li>

					<li>
						{(localStorage.getItem('jwtToken') == undefined ||
							localStorage.getItem('jwtToken') == null) && (
							<Link to='/register'>
								Register <i class='fas fa-user-plus'></i>
							</Link>
						)}
					</li>
					<li>
						{(localStorage.getItem('jwtToken') == undefined ||
							localStorage.getItem('jwtToken') == null) && (
							<Link to='/login'>
								Login <i class='fas fa-sign-in-alt'></i>
							</Link>
						)}
					</li>
					<li>
						{(localStorage.getItem('jwtToken') == undefined ||
							localStorage.getItem('jwtToken') == null) && (
							<Link to='/admin'>
								Admin Panel <i class='fas fa-user-shield'></i>{' '}
							</Link>
						)}
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
