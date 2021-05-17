import React from 'react'
import "../index1.css"
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/Laptop';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import logo from "../images/logo.png"
const Navbar = () => {
    return (
        
<div>    
       <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>     
        <div >
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ulset">
      <li className="nav-item">
          <NavLink activeclassName="menu_active" className="nav-link" to="/"> <HomeIcon></HomeIcon>     Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassName="menu_active" className="nav-link" to="/about"><InfoIcon></InfoIcon>     About </NavLink>
        </li>  
        <li className="nav-item">
          <NavLink  activeclassName="menu_active" className="nav-link" to="/courses"> <LaptopIcon></LaptopIcon>     Courses </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeclassName="menu_active"className="nav-link" to="/contact"> <ContactMailIcon></ContactMailIcon>     Contact</NavLink>
        </li>
      
      
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
