import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import Navbar from '../layout/Navbar';

import mask from '../../img/poll.PNG';
import Aid from '../../img/aid2.jpg';
import food from '../../img/foody.png';
import exercise from '../../img/exercise.png';
import trend from '../../img/trend.png';
//import trend from '../../img/trend.png';
// import diet from '../../img/adminhome.JPG';
// import mealplan from '../../img/mealplan.JPG';
//import AddDiet from './components/layout/adddiet';
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

class Home extends Component {
	constructor(props) {
		super(props);
		this.push = this.push.bind(this);
		this.state = {
			plans: [
				// { 'calorie': 2044, 'breakfast': 'homey2', 'lunch': 'honey3', 'snack': 'honey4', 'dinner': 'honey5' },
				//{ 'calorie': 2022, 'breakfast': 'fnhefh', 'lunch': 'honey3', 'snack': 'honey4', 'dinner': 'honey5' },
			],
		};
	}
	push() {
		window.location.href = 'http://localhost:3000/adddiet';
	}
	push2() {
		window.location.href = 'http://localhost:3000/disease';
	}
	push3() {
		window.location.href = 'http://localhost:3000/diet';
	}
	push4() {
		window.location.href = 'http://localhost:3000/exercise';
	}
	push5() {
		let test = { id: 1, comment: 'Rimsha got bestand beasty GUY of uni' };
		localStorage.setItem('Updateplan', 'rimsha is churiii');
		window.location.href = 'http://localhost:3000/updatediet';
	}

	fetch = async () => {
		const response = await fetch('http://localhost:1000/api/diet');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		this.setState({
			plans: body,
		});
		return body;
	};
	delete = (did, index) => {
		fetch('http://localhost:1000/api/diet/del_diet', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: did,
			}),
		});
	};

	componentDidMount() {
		//console.log("muizzzz", this.fetch);
		this.fetch();
	}

	render() {
		console.log('my plans', this.state.plans);
		return (
			<section>
				<div>
					<br />

					<h1>
						<b>
							<i class='far fa-share-square'></i> Current Diet Plans in DB:
						</b>
					</h1>
					<br />
					<Button style={{ backgroundColor: '#00b2d2' }} onClick={this.push}>
						<i class='far fa-plus-square'></i> Add new Diet Plans into DB
					</Button>

					<center>
						<Table striped bordered hover variant='dark'>
							<thead>
								<tr>
									<th
										style={({ width: '12em' }, { backgroundColor: '#282828' })}
									>
										<b>CALORIES</b>
									</th>
									<th
										style={({ width: '12em' }, { backgroundColor: '#282828' })}
									>
										<b>
											<center>LUNCH</center>
										</b>
									</th>
									<th
										style={({ width: '12em' }, { backgroundColor: '#282828' })}
									>
										<b>
											<center>BREAKFAST</center>
										</b>
									</th>
									<th
										style={({ width: '12em' }, { backgroundColor: '#282828' })}
									>
										<b>
											<center>SNACK</center>
										</b>
									</th>
									<th
										style={({ width: '12em' }, { backgroundColor: '#282828' })}
									>
										<b>
											<center>DINNER</center>
										</b>
									</th>
									<th style={{ backgroundColor: '#282828' }}>
										<b>
											<center>ACTIONS</center>
										</b>
									</th>
								</tr>
							</thead>
							<tbody></tbody>
							<tbody>
								{this.state.plans.map((item, index) => (
									<tr>
										<td>
											<b>{item.calorie}</b>
										</td>
										<td>{item.lunch}</td>
										<td>{item.breakfast}</td>
										<td>{item.snack}</td>
										<td>{item.dinner}</td>
										<td style={{ width: '12em' }}>
											<Button
												variant='danger'
												onClick={() => {
													this.delete(item._id, index);
													var array = [...this.state.plans];
													var index = array.indexOf(item);
													if (index !== -1) {
														array.splice(index, 1);
														this.setState({ plans: array });
													}
												}}
											>
												Delete
											</Button>
											<Button variant='secondary' onClick={this.push5}>
												Update
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>

						{'>'}
					</center>
				</div>
			</section>
		);
	}
}

export default Home;
