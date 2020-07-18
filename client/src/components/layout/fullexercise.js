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
import gif1 from '../../img/gif9.gif';
import gif2 from '../../img/gif10.gif';
import gif3 from '../../img/gif11.gif';

import gif4 from '../../img/gif12.gif';
import gif5 from '../../img/gif13.gif';
import gif6 from '../../img/gif14.gif';
import exe1 from '../../img/exe1.JPG';

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Fullexercise extends Component {

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
                <center><h2><i class="fas fa-volleyball-ball"></i> Full Body Workouts <i class="fas fa-volleyball-ball"></i></h2></center>
                <hr/>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <img src={gif1} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="dark"> <h5>Seated Shoulder Presses</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Sit upright on bench with dumbbells over head. Make sure back is flat.<br />
                                <i class="fas fa-arrow-circle-right"></i> Lower dumbbells slowly to shoulders.<br />
                                <i class="fas fa-arrow-circle-right"></i> When arms are at 90 degrees, press the dumbbells back up and repeat.<br />

                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif2} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="dark"> <h5>Lateral Raises</h5></Badge><br />
                                <br />
                                <i class="fas fa-arrow-circle-right"></i> Stand upright, knees slightly bent, shoulder width apart, holding dumbbells at sides.<br />
                                <i class="fas fa-arrow-circle-right"></i> Bend elbows slightly and raise the dumbbells out to sides.<br />
                                <i class="fas fa-arrow-circle-right"></i> When arms are parallel to floor, slowly lower back and repeat.<br />

                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif3} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="dark"> <h5>Reverse Flies</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Sit on edge of bench, feet flat on the floor.<br />
                                <i class="fas fa-arrow-circle-right"></i> Hold dumbbells next to feet and bend arms slightly.<br />
                                <i class="fas fa-arrow-circle-right"></i> When arms are parallel to floor, slowly lower dumbbells back.<br />

                            
                            </p>
                        </Col>
                        <Col sm={2}>
                            <img src={gif4} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="dark"> <h5>Front Raises</h5></Badge><br />
                                <br/>
                                <i class="fas fa-arrow-circle-right"></i> Stand upright, knees slightly bent, shoulder width apart.<br />
                                <i class="fas fa-arrow-circle-right"></i> Raise one dumbbell directly in front of you.<br />
                                <i class="fas fa-arrow-circle-right"></i> When arm is parallel to ground lower dumbbell slowly back. Repeat with the other arm.<br />
                               
                            
                            </p>
                        </Col>
                        <Col sm={2}>
                            <img src={gif5} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="dark"> <h5>Dead Lifts</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Stand upright, feet shoulder width apart, knees slightly bent.<br />
                                <i class="fas fa-arrow-circle-right"></i> Bend lower back and knees to lower the weights down your legs.<br />
                                <i class="fas fa-arrow-circle-right"></i> Stand upright using lower back and legs, maintaining flat back and keeping your head up.<br />

                            
                            </p>
                        </Col>
                        <Col sm={2}>
                            <img src={gif6} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="dark"> <h5>Lying Bent Over Rows</h5></Badge><br />
                                <br/>
                                <i class="fas fa-arrow-circle-right"></i> Lie face down on a flat or slightly inclined bench. Hold two dumbbells and let arms hang down.<br />
                                <i class="fas fa-arrow-circle-right"></i> Pull dumbbells up towards chest.<br />
                                <i class="fas fa-arrow-circle-right"></i> Slowly lower dumbbells back down and repeat.<br />
                               
                            
                            </p>
                        </Col>
                    </Row>
                    <hr/>
                    <br/>
                    <Row>
                        <Col sm={4}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=va6lh5nZ4R8' playing />
                        </Col>
                        <Col sm={8}>cdcdc</Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Fullexercise;
