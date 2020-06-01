import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.PNG';
const Navbar2 = () => {
  return (
    <nav className="navbar bg-dark-m">
      
    
      <img src={logo} className='logowe' alt="logo" />
      <ul>
        <li><Link to='!#'>About Us</Link></li>
        <li><Link to='/register'>Register2</Link></li>
        <li><Link to='/login'>Login2</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar2;
