import React from 'react';

import './App.css';

function About() {
	return (
		<div>
			<h1 className='h1test'>Sign-Up</h1>

			<form>
				<table>
					<tr>
						<td>
							<p>Username:</p>
						</td>
						<td>
							<input type='text' />
						</td>
					</tr>

					<tr>
						<td>
							<p>Email:</p>
						</td>
						<td>
							<input type='email' />
						</td>
					</tr>

					<tr>
						<td>
							<p>Password:</p>
						</td>
						<td>
							<input type='password' />
						</td>
					</tr>
					<button>Submit</button>
				</table>
			</form>
		</div>
	);
}

export default About;
