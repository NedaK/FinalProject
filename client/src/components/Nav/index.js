import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import { Link } from "react-router-dom";


function Nav(props){
  
    return(
        <div className = "container">
         <nav className="navbar navbar-expand-lg transparent">
            <h3 className="navbar-brand">He Said<i className="far fa-smile-wink"></i>She Said</h3>
  
            
  
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to ="/signup">SignUp  </Link>
                {/* <a className="nav-link" href="#">Sign Up <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item">
                <Link to ="/login">  Login</Link>
                {/* <a className="nav-link" href="#">Login</a> */}
            </li>
            
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    {/* </div> */}
    </nav>
    </div>
    
    

   ); 
  
    
  };
  

export default Nav;