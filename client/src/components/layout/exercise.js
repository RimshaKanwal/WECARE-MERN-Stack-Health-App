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
import burger from '../../img/gym1.jpg';
import lowergym from '../../img/gym2.jpg';
import gym3 from '../../img/gym33.jpg';
import pasta from '../../img/slide6pasta.jpg';
import pizza from '../../img/slide5pizza.jpg';
import coke from '../../img/slide8coke.jpg';
import arms from '../../img/arms.jpg';
import fullbody from '../../img/fullbody.jpg';
import armss from '../../img/armss.jpg';
import walk from '../../img/gif dib.gif';

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Exercise extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      showcase: '',
      showcase2: '',

      show_button: true,
      mydata: null,
      chart: null,
      recommendation: null
    };
  }
  push1() {
    window.location.href = "http://localhost:3000/upperexercise"
  }
  push2() {
    window.location.href = "http://localhost:3000/lowerexercise"
  }
  push3() {
    window.location.href = "http://localhost:3000/absexercise"
  }
  push4() {
    window.location.href = "http://localhost:3000/armexercise"
  }
  push5() {
    window.location.href = "http://localhost:3000/fullexercise"
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={exeban1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="exehead"><i class="fas fa-dumbbell"></i> BE STRONGER THEN YOUR EXCUSES <i class="fas fa-dumbbell"></i></h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={exeban2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="exehead" ><i class="fas fa-dumbbell"></i> GET INTO SHAPE <i class="fas fa-dumbbell"></i></h2>

            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <br />
        <Container>
          <Row>
            
            <Col>
            <Jumbotron>
              <Form>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <h4>Disease based Exercise Recommendation</h4>
                  <Form.Label><b>Select your disease:</b></Form.Label>
                  <Form.Control as='select'
                    onChange={e => this.setState({ disExercise: e.target.value })}
                  >
                    <option value='eactive'>Heart Patient </option>
                    <option value='diabetes'>Diabetes</option>
                    <option value='light'>High/Low Blood Pressure</option>
                    <option value='active'> Thyroid</option>
                    <option value='vactive'>Asthma</option>
                    
                    <option value='eactive'>Cancer </option>
                    <option value='diabeteus'>Arthritis</option>
                    <option value='light'>Demantia</option>
                    <option value='active'> Thyroid</option>
                    <option value='vactive'>Asthma</option>

                  </Form.Control>
                </Form.Group>
                <center><Button variant="primary" style={{ width: '20rem' }} onClick={async () => {
                  var show=0;

                  if (this.state.disExercise == 'adds') {
                    show = 1;
                  }
                  if (this.state.disExercise == 'diabetes') {
                    show = "30 mins of regular pre-breakfast brisk walk can help insulin more effectively lower your sugar level.";
                  }
                  else {
                    show = 223451;
                  }

                  this.setState({
                    showcase: show,

                    //		recommendation: alldata.express[1]
                  });

                }}> Check Recommendations </Button></center>
                <br/>
              <label><b> </b>{this.state.showcase}</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">


                </Form.Group>
              </Form>
              </Jumbotron>
            </Col>
            
            <Col><Jumbotron>
              <Form>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <h4>Conditional Recommendation</h4>
                  <Form.Label><b>Select your condition:</b></Form.Label>
                  <Form.Control as='select'
                    onChange={e => this.setState({ disExercise: e.target.value })}
                  >
                    <option value='eactive'>Shoulder pain </option>
                    <option value='diabetes'>Back pain</option>
                    <option value='light'>Pain in legs</option>
                    <option value='active'> Pain in arms</option>
                    <option value='vactive'>Neck pain</option>
                    
                    <option value='eactive'>Fibromyalgia </option>
                    <option value='diabeteus'>Muscle pain</option>
                    

                  </Form.Control>
                </Form.Group>
                <center><Button variant="primary" style={{ width: '20rem' }} onClick={async () => {
                  var show=0;

                  if (this.state.disExercise == 'adds') {
                    show = 1;
                  }
                  if (this.state.disExercise == 'diabetes') {
                    show = 'Plank for 30 seconds. Streches: Do arm and back streches. Do wall situps (15 recommended)';
                  }
                  else {
                    show = 223451;
                  }

                  this.setState({
                    showcase2: show,

                    //		recommendation: alldata.express[1]
                  });

                }}> Check Recommendations </Button></center>
                <br/>
              <label><b> </b>{this.state.showcase2}</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">


                </Form.Group>
              </Form>
              </Jumbotron></Col>
          </Row>
        </Container>
        <CardGroup >
          <Card border="secondary">
            <Card.Img variant="top" src={burger} />
            <Card.Body>
              <Card.Title>Upper Body</Card.Title>
              <Card.Text>
                Upper body strength training exercises target five major parts of the upper body; chest, shoulders, triceps, biceps and the back.
      </Card.Text>
              <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push1}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>

            </Card.Body>

          </Card>
          <Card border="secondary">
            <Card.Img variant="top" src={lowergym} />
            <Card.Body>
              <Card.Title>Lower Body</Card.Title>
              <Card.Text>
                Lower body improves your overall fitness, boosts your metabolism, Improve bone health and reduces the risk of injury.
        {' '}
              </Card.Text>
              <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push2}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>

            </Card.Body>

          </Card>
          <Card border="secondary">
            <Card.Img variant="top" src={gym3} />
            <Card.Body>
              <Card.Title>Abs</Card.Title>
              <Card.Text>
                Abs exercise reduces lower back pain, Improves posture and stability and builds Functional Strength.
      </Card.Text>
              <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push3}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>

            </Card.Body>

          </Card>
        </CardGroup>
        <Container>
          <Row>
            <CardGroup>
              <Col sm={4}>

                <Card border="secondary">
                  <Card.Img variant="top" src={armss} />
                  <Card.Body>
                    <Card.Title>Arms</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
      </Card.Text>
                    <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push4}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>

                  </Card.Body>

                </Card>

              </Col>
              <Col sm={8}>
                <Card border="secondary">
                  <Card.Img variant="top" src={fullbody} />
                  <Card.Body>
                    <Card.Title>Full Body</Card.Title>
                    <Card.Text>
                      A full body workout can build muscle mass faster than traditional weight lifting methods. Full body workouts are fantastic because they target multiple muscles simultaneously in every exercise.
      </Card.Text>
                    <center><Button variant="primary" style={{ width: '14rem' }} onClick={this.push5}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>

                  </Card.Body>

                </Card>
              </Col>
            </CardGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Exercise;
