import React from 'react'
import { Link } from 'react-router-dom';
//import Navbar from '../layout/Navbar';
const Landing = () => {
  return (
   
    <section className="landing">
       
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">WECARE</h1>
        <p className="lead">
          Make your health a priority
        </p>
        <div className="buttons">
          <Link to='/register' className="btn btn-primary">Sign Up</Link>
          <Link to='/login' className="btn btn-light">Login</Link>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Landing;
