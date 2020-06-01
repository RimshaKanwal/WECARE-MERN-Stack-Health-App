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

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Exercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feet: '',
            inches: '',
            weight: '',
            bmi: '',
            age: '',
            gender: '',
            activity: '',
            goal: '',

            show_button: true,
            mydata: null,
            chart: null,
            recommendation: null
        };
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
                <br/>
                <CardGroup >
  <Card border="secondary">
    <Card.Img variant="top" src={burger} />
    <Card.Body>
      <Card.Title>Upper Body</Card.Title>
      <Card.Text>
      Upper body strength training exercises target five major parts of the upper body; chest, shoulders, triceps, biceps and the back.
      </Card.Text>
      <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push4}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>
                
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
      <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push4}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>
                
    </Card.Body>
    
  </Card>
  <Card border="secondary">
    <Card.Img variant="top" src={gym3} />
    <Card.Body>
      <Card.Title>Abs</Card.Title>
      <Card.Text>
        Abs exercise reduces lower back pain, Improves posture and stability and builds Functional Strength.
      </Card.Text>
      <center><Button variant="primary" style={{ width: '10rem' }} onClick={this.push4}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>
                
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
      <center><Button variant="primary" style={{ width: '14rem' }} onClick={this.push4}><i class="fas fa-dumbbell"></i> Try Now <i class="fas fa-dumbbell"></i></Button></center>
      
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
