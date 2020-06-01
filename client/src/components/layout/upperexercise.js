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

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Upperexercise extends Component {

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
                
               
               <center> <Badge variant="dark"> <h2><b>Upper Body</b></h2></Badge> </center>
               <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />

            </div>
        );
    }
}

export default Upperexercise;
