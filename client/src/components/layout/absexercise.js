import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import food from '../../img/food3.jpg';
import before from '../../img/PA2.jpg';
import after from '../../img/PA1.jpg';
import ReactPlayer from 'react-player'
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
import gif1 from '../../img/gif15.gif';
import gif2 from '../../img/gif16.gif';
import gif3 from '../../img/gif7.gif';

import gif4 from '../../img/gif8.gif';


import exe1 from '../../img/exe1.JPG';

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Absexercise extends Component {

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
                <center><h2><i class="fas fa-volleyball-ball"></i> Body Abs Workouts <i class="fas fa-volleyball-ball"></i></h2></center>
                <hr/>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <img src={gif1} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Oblique Crunches</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Lie flat on your back, with your knees bent at right angles and twisted to the left.<br />
                                <i class="fas fa-arrow-circle-right"></i> Place your fingertips to the side of your head.<br />
                                <i class="fas fa-arrow-circle-right"></i> Curl up just enough to lift both your shoulders off the floor a few inches.<br />

                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif2} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Basic Crunch</h5></Badge><br />
                                
                                <i class="fas fa-arrow-circle-right"></i> Lying on your back, keep your knees bent with your hands behind your head.<br />
                                <i class="fas fa-arrow-circle-right"></i> Keep your head in a neutral position<br />
                                <i class="fas fa-arrow-circle-right"></i>Slowly curl inwards, bringing your shoulders off the ground.
                            
                            </p>

                        </Col>
                        
                        
                    </Row>
                    
                    <hr/>
                    <br/>
                    <Row>
                        <Col sm={4}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=T76BHrT8wBg' playing />
                        </Col>
                        <Col sm={8}></Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Absexercise;
