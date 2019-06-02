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
                
        
         <nav className="navbar navbar-expand-md transparent">
             <Link to="/">
            <h3 className="navbar-brand">He Said<i className="far fa-smile-wink"></i>She Said</h3>
            </Link>
            
            {props.user ? (
                
                
                <ul className="navbar-nav ml-auto">
                   
                     <li className="nav-item active">
                        Welcome, {props.user}
                    
                    </li>
                    <li className="nav-item">
                    <Link to ="/createPoll">
                    <button type="submit" className="btn btn-success">Add Poll</button>
                    {/* <Link to ="/createPoll">Add Poll </Link> */}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <button type="submit" className="btn btn-success"
                        onClick={props.handleLogoutSubmit}>Logout</button>
                        
                    </li>
                </ul>
                
            ) :(
           
  
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to ="/signup">
            <button type="submit" className="btn btn-success">Sign Up</button>
            </Link>
                {/* <Link to ="/signup">SignUp  </Link> */}
               
            </li>

            <li className="nav-item">
            <Link to ="/login">
            <button type="submit" className="btn btn-success">Login</button>
            </Link>
                {/* <Link to ="/login">  Login</Link> */}
                
            </li>
            
            
        </ul>
              )}
             
    {/* </div> */}
    </nav>
    
          //  )}
    // </UserContext.Consumer>

   ); 
  
    
  };
  

export default Nav;