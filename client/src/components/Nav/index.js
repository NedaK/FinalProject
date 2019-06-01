import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import { Link } from "react-router-dom";
//import UserContext from '../../utils/context';


function Nav(props){
    // const {user} = props;
    // console.log(user);
  
    return(
        // <UserContext.Consumer>
        //     {(user => 
                
        <div className = "container">
         <nav className="navbar navbar-expand-lg transparent">
            <h3 className="navbar-brand">He Said<i className="far fa-smile-wink"></i>She Said</h3>

            
            {props.user ? (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        Welcome, {props.user}
                    
                    </li>
        
                    <li className="nav-item">
                    <Link to ="/createPoll">Add Poll </Link>
                        
                    </li>
                    <li className="nav-item">
                    <button type="submit" className="btn btn-success"
                        onClick={props.handleLogoutSubmit}>Logout</button>
                        
                    </li>
                </ul>
            ) :(
           
  
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to ="/signup">SignUp  </Link>
               
            </li>

            <li className="nav-item">
                <Link to ="/login">  Login</Link>
                
            </li>
            
            
        </ul>
              )}
             
    {/* </div> */}
    </nav>
    </div>
          //  )}
    // </UserContext.Consumer>

   ); 
  
    
  };
  

export default Nav;