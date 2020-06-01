import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Navbar from '../layout/Navbar';
import mask from '../../img/poll.PNG';
import Aid from '../../img/aid2.jpg';
import food from '../../img/foody.png';
import exercise from '../../img/exercise.png';
import trend from '../../img/trend.png';
import Analytics from '../../img/analytics.png';
import {
	Form,
	Col,
	Row,
	Container,
	Card,
	Button,
	Jumbotron
} from 'react-bootstrap';

class Home extends Component {
	constructor() {
		super();
		this.push = this.push.bind(this);
	}

	push() {
		window.location.href = 'http://localhost:3000/pollution';
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
		window.location.href = 'http://localhost:3000/currenttrends';
	}
	render() {
		return (
			<section>
				<div>
					<h1 className='homeheading'>
						<center>Your Ultimate Guide to Expert Health</center>
					</h1>
					<Jumbotron>
						<div>
							<Form>
								<Row>
									<Col>
										<Card
											border='info'
											className='Card'
											style={{
												width: '20rem',
												height: '30em',
												borderstyle: 'double'
											}}
										>
											<center>
												<Card.Img
													variant='top'
													src={mask}
													style={{ width: '14rem', marginTop: '2em' }}
												/>
											</center>
											<Card.Body>
												<Card.Title>Travel Guide</Card.Title>
												<Card.Text>
													Suggests whether you should travel to specific city
													depending upon your condition and pollution level of
													city.
												</Card.Text>
												<center>
													{' '}
													<Button
														variant='primary'
														style={{ width: '10rem' }}
														onClick={this.push}
													>
														Try Now
													</Button>{' '}
												</center>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card
											border='info'
											style={{ width: '20rem', height: '30em' }}
										>
											<center>
												<Card.Img
													variant='top'
													src={Aid}
													style={{ width: '13.65rem', marginTop: '2em' }}
												/>
											</center>
											<Card.Body>
												<Card.Title>First Aid</Card.Title>
												<Card.Text>
													Enter the symptoms you are facing and check the
													disease and its instant First Aid.
												</Card.Text>
												<center>
													<Button
														variant='primary'
														style={{ width: '10rem' }}
														onClick={this.push2}
													>
														Try Now
													</Button>
												</center>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card
											border='info'
											style={{ width: '20rem', height: '30em' }}
										>
											<center>
												<Card.Img
													variant='top'
													src={food}
													style={{ width: '13.6rem', marginTop: '2em' }}
												/>
											</center>
											<Card.Body>
												<Card.Title>Diet Recommender</Card.Title>
												<Card.Text>
													Check your BMI, select calorie intake of your choice
													and set your diet plan accordingly.
												</Card.Text>
												<center>
													{' '}
													<Button
														variant='primary'
														style={{ width: '10rem' }}
														onClick={this.push3}
													>
														Try Now
													</Button>
												</center>
											</Card.Body>
										</Card>
									</Col>
								</Row>
								<br />
								<Row>
									<Col>
										<Card
											border='info'
											style={{ width: '20rem', height: '27em' }}
										>
											<center>
												<Card.Img
													variant='top'
													src={exercise}
													style={{ width: '13rem', marginTop: '2em' }}
												/>
											</center>
											<Card.Body>
												<Card.Title>Health Based Exercise Guide</Card.Title>
												<Card.Text>
													Get a visual display of exercise that suits your
													condition.
												</Card.Text>
												<center>
													<Button
														variant='primary'
														style={{ width: '10rem' }}
														onClick={this.push4}
													>
														Try Now
													</Button>
												</center>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card
											border='info'
											style={{ width: '20rem', height: '27em' }}
										>
											<center>
												<Card.Img
													variant='top'
													src={trend}
													style={{ width: '14rem', marginTop: '2em' }}
													onClick={this.push5}
												/>
											</center>
											<Card.Body>
												<Card.Title>Current Trends</Card.Title>
												<Card.Text>
													Check trends of cities with respect to their weather
													conditions.
												</Card.Text>
												<center>
													<Button variant='primary' style={{ width: '10rem' }}>
														{' '}
														Try Now
													</Button>
												</center>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card
											border='info'
											style={{ width: '20rem', height: '27em' }}
										>
											<center>
												{' '}
												<Card.Img
													variant='top'
													src={Analytics}
													style={{ width: '13rem', marginTop: '2em' }}
												/>
											</center>
											<Card.Body>
												<Card.Title>Analytics</Card.Title>
												<Card.Text>
													Get a visual display of exercise that suits your
													condition
												</Card.Text>
												<center>
													<Button variant='primary' style={{ width: '10rem' }}>
														Try Now
													</Button>
												</center>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</Form>
						</div>
					</Jumbotron>
				</div>
			</section>
		);
	}
}

export default Home;
