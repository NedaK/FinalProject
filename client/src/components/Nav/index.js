import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import { Link } from "react-router-dom";
//import UserContext from '../../utils/context';


function Nav(props){
    const {user} = props;
  
    return(
        // <UserContext.Consumer>
        //     {(user => 
                
        <div className = "container">
         <nav className="navbar navbar-expand-lg transparent">
            <h3 className="navbar-brand">He Said<i className="far fa-smile-wink"></i>She Said</h3>

            
            {props.user ? (
                <p>Welcome, {props.user}
             <Link to ="/createPoll">Add Poll </Link>
             <button type="submit" className="btn btn-primary"
                        
                        onClick={props.handleLogout}>Logout</button>
             </p>
            ) :(
           
  
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to ="/signup">SignUp  </Link>
               
            </li>

            <li className="nav-item">
                <Link to ="/login">  Login</Link>
                
            </li>
            
            <li className="nav-item">
                <Link to ="/userhome">  UserHome</Link>
                
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