import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';  
import '../../styles/Navbar.css';
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navelement">
        <div className="home"><Link to="/Homepage">Home</Link></div>
        <div className="contact"><a href="#contactUs">Contact Us</a></div>
        <div className="help"><a href="#helpSupport">Help & Support</a></div>
        <div className="profile">
          <FaUser />
          <div className="account">
            <div className="drop-down">
            <Link to="/Login">Login</Link>
            <Link to="/Signup">SignUp</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;