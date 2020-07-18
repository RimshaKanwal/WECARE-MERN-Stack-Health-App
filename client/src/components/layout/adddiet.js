import React, { Fragment, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row, Container, Card, Jumbotron, ListGroup, ListGroupItem, Tabs, Tab, Sonnet, Table } from 'react-bootstrap';


const Adddiet  = () => {

const [formData, setFormData] = useState({
    calorie:'',
    breakfast:'',
    lunch:'',
    snack:'',
    dinner:''
});

const { calorie, breakfast, lunch, snack, dinner } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
    e.preventDefault();
    const newPlan = {
        calorie,
        breakfast,
        lunch,
        snack,
        dinner
    }
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body =JSON.stringify(newPlan);

        const res = await axios.post('/api/diet', body, config);
        console.log(res.data);
        localStorage.setItem('jwtToken',res.data)
        alert("doneeee");
       // window.location.href="http://localhost:3000/Home"

    }catch(err){
        console.error(err.response.data);
    }
    };


  return (
    <Fragment>
      <br/>
      <Container>
        <Row>
        <Col sm="3"></Col>
        <Col>
      <h1 className="large text-info"><b>Add Diet Plans</b></h1>
      <p className="lead"><i class="far fa-plus-square"></i> Create and add diet plan to the database.</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="number" 
          placeholder="Number of calories" 
          name="calorie" 
          value={calorie}
          onChange={e => onChange(e)}
          required 
          />
        </div>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Breakfast items" 
          name="breakfast" 
          value={breakfast}
          onChange={e => onChange(e)}
          required
          />
          
        </div>
        <div className="form-group">
          <input
            type='text'
            placeholder='Lunch items'
            name='lunch'
            value={lunch}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        
        <div className="form-group">
          <input
            type='text'
            placeholder='Snacks item'
            name='snack'
            value={snack}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>

        <div className="form-group">
          <input
            type='text'
            placeholder='Dinner items'
            name='dinner'
            value={dinner}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>

        <center><b><input style={{width:"16em"}} type="submit" className="btn btn-info" value="Add Plan" /></b></center>
      </form>
      <p className="my-1">
         </p>
         </Col>
         <Col sm="3"></Col>
         </Row>
         </Container>
    
    </Fragment>
  );
}

export default Adddiet;
