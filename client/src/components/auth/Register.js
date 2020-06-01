import React, { Fragment, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = () => {

const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
});

const { name, email, password, password2} = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
        name,
        email,
        password
    }
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body =JSON.stringify(newUser);

        const res = await axios.post('/api/User', body, config);
        console.log(res.data);
        localStorage.setItem('jwtToken',res.data)
        window.location.href="http://localhost:3000/Home"
    }catch(err){
        console.error(err.response.data);
    }
    };


  return (
    <Fragment>
      
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={name}
          onChange={e => onChange(e)}
          required 
          />
        </div>
        <div className="form-group">
          <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          value={email}
          onChange={e => onChange(e)}
          required
          />
          
        </div>
        <div className="form-group">
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to='/Login'>Sign In</Link>
      </p>
    
    </Fragment>
  );
}

export default Register;
