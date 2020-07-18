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
import gif1 from '../../img/gif5.gif';
import gif2 from '../../img/gif6.gif';
import gif3 from '../../img/gif7.gif';

import gif4 from '../../img/gif8.gif';

import exe1 from '../../img/exe1.JPG';

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Armexercise extends Component {

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
                <center><h2><i class="fas fa-volleyball-ball"></i> Arms Workouts <i class="fas fa-volleyball-ball"></i></h2></center>
                <hr/>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <img src={gif1} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Exercise Ball</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Start in the top of the push-up position on the floor and brace your abs<br />
                                <i class="fas fa-arrow-circle-right"></i> Keep your abs braced as you pick one foot up off the floor.<br />
                                <i class="fas fa-arrow-circle-right"></i> Do not let your hips sag or rotate<br />

                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif2} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Parallel Bar Raises</h5></Badge><br />
                                
                                <i class="fas fa-arrow-circle-right"></i> Step up onto apparatus and place forearms into pads.<br />
                                <i class="fas fa-arrow-circle-right"></i> Grasp handles and stabilize shoulders by depressing shoulders down<br />
                                <i class="fas fa-arrow-circle-right"></i> Keeping back firmly pressed against back support, slowly lower legs.
                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif3} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Reverse Crunches</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Start by lying on your back and holding onto the bench<br />
                                <i class="fas fa-arrow-circle-right"></i> Keeping your knees bent to 90 degrees.<br />
                                <i class="fas fa-arrow-circle-right"></i> Move back and forth amd repeat range of motion.<br />

                            
                            </p>
                        </Col>
                        <Col sm={2}>
                            <img src={gif4} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Flutter Kicks</h5></Badge><br />
                                <br/>
                                <i class="fas fa-arrow-circle-right"></i> Lie back onto floor or bench with both knees bent and feet flat.<br />
                                <i class="fas fa-arrow-circle-right"></i> Contract abdominal muscles continuously to stabilize trunk<br />
                                <i class="fas fa-arrow-circle-right"></i> Slowly lower one leg to approximately 45-90
                            
                            </p>
                        </Col>
                    </Row>
                    
                    <hr/>
                    <br/>
                    <Row>
                        <Col sm={4}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=iqT_G1ci2QU' playing />
                        </Col>
                        <Col sm={8}></Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Armexercise;
