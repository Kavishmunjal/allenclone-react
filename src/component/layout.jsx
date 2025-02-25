import React from "react";
import { BrowserRouter, Routes, Route, Link , Outlet} from "react-router-dom";
import Logo from "../../src/assets/logo.png";
import "../component/navStyle.css";


function Layout() {
 

  return <div className="navbar">
    <Link to="/" className="logo"><img src={Logo} alt="Logo" width="90" height="35" /></Link>
    <Link to="/Course" className="course">Course</Link>
    <Link to="/TestSeries" className="test">Test Series</Link>
    <Link to="/Scolarship" className="scholarship">Scholarship</Link>
    <Link to="/Results" className="results">Results</Link>
    <Link to="/About-us" className="about">About Us</Link>
    



  <div>
     <Outlet /> 
  </div>
     
  </div>
}


   

export default Layout