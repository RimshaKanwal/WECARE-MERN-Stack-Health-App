import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import food from '../../img/food3.jpg';
import before from '../../img/PA2.jpg';
import after from '../../img/PA1.jpg';

import egg from '../../img/slide1egg.jpg';
import apple from '../../img/slide7apple.jpg';
import bread from '../../img/slide2bread.jpg';
import rice from '../../img/slide3rice.jpg';
import burger from '../../img/slide4burger.jpg';
import pasta from '../../img/slide6pasta.jpg';
import pizza from '../../img/slide5pizza.jpg';
import coke from '../../img/slide8coke.jpg';
import dietpic from '../../img/dietpic22.png';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'
//for graph
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';


class Diet extends Component {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

	constructor(props) {
		super(props);
		this.state = {
			feet: 'null',
			inches: '',
			weight: 'null',
			bmi: '',
			age: 'null',
			gender: '',
			activity: '',
			goal: '',
			diet_plan: {},
			show_button: true,
			mydata: null,
			chart: null,
			recommendation: null
		};
	}

	submit = () => {
		//alert(this.state.city+" "+this.state.days+" "+this.state.disease+" "+this.state.sensitive);
		fetch('http://localhost:1000/api/diet/get_calorie', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"calorie": this.state.goal,

			})
		})
			.then((res) => res.json()).then((resjson) => {
				this.setState({
					diet_plan: resjson
				})
				alert(this.state.diet_plan.dinner);
			})
			.catch(err => alert(err));
	};

	componentDidMount() {
		// Call our fetch function below once the component mounts
		// this.callBackendAPI()
		// 	.then(res => this.setState({ data: res.express }))
		// 	.catch(err => console.log(err));
	}
	// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
	callBackendAPI = async () => {
		const response = await fetch('http://localhost:1000/api/diet');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	render() {
		return (
			<div>
				<br />

				<Form>
					<Container>
						<Row>
							<Col sm={4}>

								<BeforeAfterSlider
									before={after}
									after={before}
									width={335}
									height={292}
								/> <br />
								<Card border="secondary">
									<Card.Header className="bmihead" style={{ backgroundColor: "MidnightBlue" }}><center><h5 style={{ color: "white" }}><b>BMI Categories:</b></h5></center>
									</Card.Header>
									<Card.Body className="bmibody" >
										<label className="citylabel">► Underweight = BMI of <b>18.5</b> or less</label>
										<label className="citylabel">► Normal Weight = <b>18.5-24.9</b></label>
										<label className="citylabel">► Over Weight = <b>25-29.9</b></label>
										<label className="citylabel">► Obesity = BMI of <b>30</b> or greater</label>


									</Card.Body>
								</Card>
								<br />
								<Carousel>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={egg}
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3 className="carhead">1 Egg</h3>
											<p className="carhead"><b>155 Calories</b></p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={apple}
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3 className="carhead" >1 Apple</h3>
											<p className="carhead" ><b>52 Calories</b></p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={bread}
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3 className="carhead">1 Bread Slice</h3>
											<p className="carhead">75 Calories</p>
										</Carousel.Caption>
									</Carousel.Item>

									<Carousel.Item>
										<img
											className="d-block w-100"
											src={rice}
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3 className="carhead">1 Rice Bowl</h3>
											<p className="carhead">272 Calories</p>
										</Carousel.Caption>
									</Carousel.Item>


									<Carousel.Item>
										<img
											className="d-block w-100"
											src={burger}
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3 className="carhead">Burger</h3>
											<p className="carhead"><b>295 Calories</b></p>
										</Carousel.Caption>
									</Carousel.Item>


									<Carousel.Item>
										<img
											className="d-block w-100"
											src={pasta}
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3 className="carhead">Spaghetti </h3>
											<h4 className="carhead">(1 serving)</h4>
											<p className="carhead">131 Calories</p>
										</Carousel.Caption>
									</Carousel.Item>


									<Carousel.Item>
										<img
											className="d-block w-100"
											src={pizza}
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3 className="carhead">Pizza Slice</h3>
											<p className="carhead">290 Calories</p>
										</Carousel.Caption>
									</Carousel.Item>


									<Carousel.Item>
										<img
											className="d-block w-100"
											src={coke}
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3 className="carhead">Coke Can</h3>
											<p className="carhead">138 Calories</p>
										</Carousel.Caption>
									</Carousel.Item>





								</Carousel>
								<br />
								<Table striped bordered hover variant="success">
									<thead>
										<tr >

											<th style={{ backgroundColor: "teal" }}><center><label className="sidetable">Age Range</label></center></th>
											<th style={{ backgroundColor: "teal" }}><center><label className="sidetable">Daily Calorie Range</label></center></th>
										</tr>
									</thead>
									<tbody>
										<tr>

											<td>Children Age 2-3</td>
											<td>1,000 calories</td>
										</tr>
										<tr>
											<td>Children Age 4-8</td>
											<td>1,200 calories</td>

										</tr>
										<tr>
											<td>Boys Age 9-13</td>

											<td>1,800 calories</td>
										</tr>
										<tr>
											<td>Boys Age 14-18</td>

											<td>2,200 calories</td>
										</tr>

										<tr>
											<td>Boys Age 19-21</td>

											<td>2,600 calories</td>
										</tr>
										<tr>
											<td>Boys Age 22-25</td>

											<td>2,400 calories</td>
										</tr>

										<tr>
											<td>Boys Age 26+</td>

											<td>2,300-2,600 calories</td>
										</tr>
										<tr>
											<td>Girls Age 9-13</td>

											<td>1,600 calories</td>
										</tr>
										<tr>
											<td>Girls Age 14-18</td>

											<td>1800 calories</td>
										</tr>

										<tr>
											<td>Girls Age 19-21</td>

											<td>2,000 calories</td>
										</tr>

										<tr>
											<td>Girls Age 22-25</td>

											<td>1,800 calories</td>
										</tr>

										<tr>
											<td>Girls Age 26+</td>

											<td>1,600-1,800 calories</td>
										</tr>
									</tbody>
								</Table>
							</Col>

							<Col>


								<Jumbotron className="Jumbotron">
									<Container className="contin">
										<center><h2 className="sidetablee">BMI Calculator</h2></center>
										<hr />
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail" sm={2}>
												<Form.Label><b>Enter Height:</b></Form.Label>

											</Form.Group>

											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label></Form.Label>
												<Form.Control type="number" name="feet" placeholder="Feet" onChange={e => this.setState({ feet: e.target.value })} />
											</Form.Group>


										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail" sm={2}>
												<Form.Label><b>Enter Weight:</b></Form.Label>

											</Form.Group>

											<Form.Group as={Col} controlId="formGridEmail" sm={5}>
												<Form.Label></Form.Label>
												<Form.Control type="number" name="weight" placeholder="Kilogram" onChange={e => this.setState({ weight: e.target.value })} />
											</Form.Group>


										</Form.Row>

										<center>
											<Button
												//disabled={this.state.city}
												variant='primary'
												style={{ width: '12em' }}
												onClick={async () => {
													if((this.state.feet == 0)){
														alert("Height cannot be 0.");
													}
													else if((this.state.weight == 0)){
														alert("Weight cannot be 0.");
													}
													else if((this.state.feet < 0)){
														alert("Height cannot be Negative.");
													}
													else if((this.state.weight < 0)){
														alert("Weight cannot be Negative.");
													}
													else if((this.state.feet == 'null') || (this.state.weight == 'null')){
														alert("Fill all the required fields of the form.");
													}
													else{
														
													//await this.callBackendAPI();
													var conv = this.state.feet / 3.28
													let result = this.state.weight / (conv * conv);
													//alert(result);
													var suggest;

													if (result < 18.5) {
														suggest = "You are Under weight, you need to gain weight."
													}
													else if (result < 24.9) {
														suggest = "You have Normal weight. Gain/lose weight is not needed."
													}
													else if (result < 29.9) {
														suggest = "You are Over weight, you need to lose weight"
													}
													else if (result > 30) {
														suggest = "You are highly overweight, you need to lose weight with immediate effect."
													}


													this.setState({
														bmi: result,
														sugg: suggest
														//		recommendation: alldata.express[1]
													});
	}}}
											>
												Calculate BMI
						</Button>

										</center>

										<label><b>BMI: </b>{this.state.bmi}</label><br />
										<label><b> </b>{this.state.sugg}</label>

									</Container>
								</Jumbotron>
								<Jumbotron className="Jumbotron">
									<center><h2 className="sidetablee">Calorie Intake Planner</h2></center>
									<center><p>(calculate BMI  first to proceed)</p></center>
									<hr />

									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label><b>Age:</b></Form.Label>
											<Form.Control type="number" name="age" placeholder="Enter Age" onChange={e => this.setState({ age: e.target.value })} />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label><b>Gender:</b></Form.Label>

											<Form.Control
												as='select'
												onChange={e => this.setState({ gender: e.target.value })}
											>
												<option value='male'>Male</option>
												<option value='female'>Female</option>

											</Form.Control>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label><b>Activity:</b></Form.Label>
											<Form.Control
												as='select'
												onChange={e => this.setState({ activity: e.target.value })}
											>
												<option value='sedentary'>Sedentary: Little or no exercise</option>
												<option value='light'>Light: Exercise 1-3 times/week</option>
												<option value='active'> Active: Intense exercise 3-4 times/week</option>
												<option value='vactive'>Very Active: Intense exercise 6-7 times/week</option>
												<option value='eactive'>Extra Active: Very intense exercise daily </option>
											</Form.Control>
										</Form.Group>
									</Form.Row>


									<center>
										<Button
											//disabled={this.state.city}
											variant='primary'
											style={{ width: '12em' }}
											onClick={async () => {

												//await this.callBackendAPI();
												//let result = this.state.weight / this.state.feet;
												if((this.state.feet >= 1) || (this.state.weight >= 1)){
												let ft2cm = this.state.feet * 30.48;
												//var bmr;
												var s;
												if (this.state.gender == 'female') {
													var s = -161;
												}
												else {
													var s = 5;
												}

												let bmr = 10 * this.state.weight + 6.25 * ft2cm - 5 * this.state.age + s;


												var a = 1.2;

												
												
												 if (this.state.activity == 'light') {
													var a = 1.375;
												}
												else if (this.state.activity == 'active') {
													var a = 1.55;
												}
												else if (this.state.activity == 'vactive') {
													var a = 1.725;
												}
												else if (this.state.activity == 'eactive') {
													var a = 1.9;
												}
												alert(a);
												let asnn = bmr * a;
												var asn = Math.floor(asnn);
												var gain = asn + 250;
												var lose = asn - 250;

												this.setState({

													cal: asn,
													gainn: gain,
													losen: lose
													//		recommendation: alldata.express[1]
												});
											}
											else if(this.state.age <=4 && this.state.age >=1){
												alert("Cannot recommend diet plans for the age below 4.");
											}
											else if(this.state.age == 0 ){
												alert("Age cannot be 0");
											}
											else{
												alert("First check your BMI then proceed to this form.");
											}
											}}
										>
											Calculate BMR
						</Button>

									</center>
									<br />
									<Card>

										<Card.Body style={{ backgroundColor: "#20B2AA" }}>

											<Card.Text>
												<Row>
													<Col><center><p className="outcomecal"><b>To Lose Weight:</b> <h4><Badge variant="secondary">{this.state.losen} calories/day</Badge></h4></p>
													</center></Col>
													<Col><center><p className="outcomecal"><b>To Maintain Weight:</b> <h4><Badge variant="secondary">{this.state.cal} calories/day</Badge></h4></p>
													</center></Col>
													<Col><center><p className="outcomecal"><b>To Gain Weight:</b> <h4><Badge variant="secondary">{this.state.gainn} calories/day</Badge></h4></p>
													</center></Col>



												</Row>
												<Form.Group controlId="exampleForm.ControlSelect1">
												<Form.Label><label className="outcomecal"><b>What is your Goal?</b></label></Form.Label>
												<Form.Control
													as="select"
													onChange={e => this.setState({ goal: e.target.value })}
												>
													<option value={this.state.losen}>To Lose Weight</option>
													<option value={this.state.cal}>To Maintain Weight</option>
													<option value={this.state.gainn}>To Gain Weight</option>

												</Form.Control>
											</Form.Group>
											</Card.Text>
											<center>
											<Button variant='danger'
												style={{ width: '12em' }}
												onClick={async () => {
													let goall = this.state.goal;
													alert(goall);
													this.submit();

												}}
											>
												Check Diet Plan  <i class="fas fa-utensils"></i>
											</Button></center>
										</Card.Body>

									</Card>

								</Jumbotron>

								<Form>
									<Row>
										<Col>
											
										</Col>

									</Row>
									<Row><Col>
										</Col></Row>
								</Form>
								<br />
								<Card className="bg-dark text-white">
									<Card.Img src={dietpic} alt="Card image" />
									<Card.ImgOverlay>
										<Row>
											<Col>
											<br/>
										<center>	<h3 className="dietcard" ><b><u>Breakfast</u> <i class="fas fa-coffee"></i></b></h3> </center>
											<Card.Text>
											<p className="dietP">{this.state.diet_plan.breakfast}</p>
    </Card.Text>
											</Col>
											<Col>
											<br/>
											<center><h3 className="dietcard"><b><u>Lunch</u> <i class="fas fa-hamburger"></i></b></h3></center>
											<Card.Text>
											<p className="dietP">{this.state.diet_plan.lunch}</p>
    </Card.Text>
											</Col>
											<Col>
											<br/>
											<center><h3 className="dietcard"><b><u>Dinner</u> <i class="fas fa-drumstick-bite"></i></b></h3></center>
											<Card.Text>
											<p className="dietP">{this.state.diet_plan.dinner}</p>
    </Card.Text>
											</Col>
											
										</Row>
										<br/>
										<br/>
										<Row>
											<Col sm={2}></Col>
											<Col sm={3}><h5 className="dietcard">Snacks <i class="fas fa-apple-alt">:</i></h5></Col>
											<Col sm={6}><p className="dietP" style={{textAlign:"left"}}>{this.state.diet_plan.snack}</p></Col>
											<Col sm={1}></Col>
										</Row>
										<center><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i><i class="fas fa-grip-lines"></i></center>
										
										
									</Card.ImgOverlay>
								</Card>
							</Col>
						</Row>

					</Container>
				</Form>


			</div>
		);
	}
}

export default Diet;
