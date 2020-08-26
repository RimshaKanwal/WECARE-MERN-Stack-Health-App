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
                    <option value='heart'>Heart Disease </option>
                    <option value='diabetes'>Diabetes</option>
                    <option value='highbp'>High Blood Pressure</option>
                    <option value='thyroid'> Thyroid</option>
                    <option value='asthma'>Asthma</option>
                    
                    <option value='cancer'>Cancer </option>
                   
                   
                    
                  

                  </Form.Control>
                </Form.Group>
                <center><Button variant="primary" style={{ width: '20rem' }} onClick={async () => {
                  var show = "(1) Choose an aerobic activity such as walking, swimming, light jogging, or biking. (2) Do this at least 3 to 4 times a week. (3) Always do 5 minutes of stretching or moving around to warm up your muscles and heart before exercising.";
                                    
                  if (this.state.disExercise == 'diabetes') {
                    show = "(1) Walking: Brisk walk for 30 min before breakfast can help insulin more effectively lower your sugar level. (2) Cycling : Go for Cycling atleast once a week. (3) Yoga : Light Yoga daily is good for your health.";
                  }
                  if (this.state.disExercise == 'cancer') {
                    show = "(1) Flexibility exercises (stretching). (2) Aerobic exercise, such as brisk walking, jogging, and swimming. (3) Resistance training (Iifting weights or isometric exercise), which builds muscle.";
                  }
                  if (this.state.disExercise == 'highbp') {
                    show = "(1) Ten minutes of brisk or moderate walking three times a day. Exercise lowers blood pressure by reducing blood vessel stiffness so blood can flow more easily. (2) Desk treadmilling or pedal pushing and weight training.";
                  }
                  if (this.state.disExercise == 'thyroid') {
                    show = "Do yoga poses i.e Supported shoulderstand: Shoulderstand is often the first pose that's suggested to treat the thyroid. Plow pose: In plow pose, your thyroid is believed to get the same stimulation as it does in shoulderstand.";
                  }
                  
                  if (this.state.disExercise == 'asthma') {
                    show = "(1)  Swimming is one of the best exercises for asthma because it builds up the muscles you use for breathing. (2) Yoga is another good exercise for asthma. (3) Walking and Biking.";
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
                    
                    <option value='backpain'>Back pain</option>
                    <option value='musclepain'>Muscle Pain</option>
                    <option value='stomach'> Stomachache</option>   
                    <option value='migraines'>Migraines</option> 
                      
                    <option value='arthritis'>Arthritis </option>
                    
                    

                  </Form.Control>
                </Form.Group>
                <center><Button variant="primary" style={{ width: '20rem' }} onClick={async () => {
                  var show="(1) Stretching daily, ideally in the morning, is important for relieving Arthritis. (2) Flowing movements, such as tai chi and yoga. (3) Walking or cycling (4)  Pilates.";

                  if (this.state.disExercise == 'backpain') {
                    show = "(1) Plank: Plank for 30sec-1min. (2) Stretches : Do arm nd back streches. (3) Avoid leg exercises and lifting. (4) Wall Situps";
                  }
                  if (this.state.disExercise == 'musclepain') {
                    show = "(1)  Use an icepack for sore muscles. (2) Stretches. (3) Light exercises which include swimming and walking.";
                  }
                  if (this.state.disExercise == 'stomach') {
                    show = "(1)  A small walk after a meal. (2) Massaging your abdominal area can help to relieve sensations of tightness, cramping and bloating. (3) Regualar exercise. (4) Yoga";
                  }
                  if (this.state.disExercise == 'migraines') {
                    show = "(1) adults should do 150 minutes of moderate-intensity aerobic exercise (eg, walking). (2) 2 or more days a week of muscle-strengthening exercises (eg, light weight lifting) each week. ";
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
