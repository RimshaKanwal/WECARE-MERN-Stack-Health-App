import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.PNG';

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
							<Link to='/Home'>Home</Link>
						)}
					</li>
					<li>
						{(localStorage.getItem('jwtToken') != undefined ||
							localStorage.getItem('jwtToken') != null) && (
							<Link to='!#'>About Us</Link>
						)}
					</li>
					<li>
						{(localStorage.getItem('jwtToken') != undefined ||
							localStorage.getItem('jwtToken') != null) && (
							<Link to='!#' onClick={this.logout}>
								Logout
							</Link>
						)}
					</li>

					<li>
						{(localStorage.getItem('jwtToken') == undefined ||
							localStorage.getItem('jwtToken') == null) && (
							<Link to='/register'>Register</Link>
						)}
					</li>
					<li>
						{(localStorage.getItem('jwtToken') == undefined ||
							localStorage.getItem('jwtToken') == null) && (
							<Link to='/login'>Login</Link>
						)}
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
