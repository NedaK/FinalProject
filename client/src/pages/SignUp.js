import React, {Component} from 'react';
//Router, Route, Switch,
import { BrowserRouter as Redirect } from "react-router-dom";
import Nav from '../components/Nav'

import Wrapper from '../components/Wrapper'
//import LoginForm from '../components/LoginForm'
//import SignUpForm from '../components/SignUpForm'


import API from "../utils/API";
//import { Link } from "react-router-dom";




class SignUp extends Component{

  state={
    first:"",
    last: "",
    email: "",
    password: "",
    password2: "",
    //user:"",
    redirect: false

  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    // if (this.state.redirect) {
      return <Redirect to='/login' />
    // }
  }

  loadBooks = () =>{
    console.log("made it here")
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    //console.log(event.target)
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
      API.saveUser({
        firstName: this.state.first,
        lastName: this.state.last,
        email:this.state.email,
        //username: this.state.user,
        password: this.state.password,
        password2: this.state.password2
        
      })
        //how to to alert user if error, but redirect if success....
        .then(res => this.setRedirect())
        //maybe display something to show the user sign up was successful
        .catch(err => console.log(err));
        
    
  };
    render(){
      if(this.state.redirect){
        return <Redirect to='/login'  />
     }
  
        return (
            <Wrapper>
            <Nav />

          <div className="container">
            <div className="row">
            <div className="col-3"></div>
            <div className="col-6 mx-auto" id="signin">


            <form id="login-form" >
                <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="email" 
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                <label>First Name</label>
                
                <input type="text" className="form-control" id="FirstName" 
                value={this.state.first}
                onChange={this.handleInputChange}
                name="first" aria-describedby="firstName" placeholder="Enter First Name" />
                </div>

                <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" id="LastName" 
                value={this.state.last}
                onChange={this.handleInputChange}
                name="last" aria-describedby="lastName" placeholder="Enter Last Name" />
                </div>

                {/* <div className="form-group">
                <label>UserName</label>
                <input type="text" className="form-control" id="UserName" 
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user" aria-describedby="userName" placeholder="Enter a username" />
                </div> */}

                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" 
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password" placeholder="Password" />
                </div>

                <div className="form-group">
                <label>Re-enter Password</label>
                <input type="password" className="form-control" id="password2" 
                value={this.state.password2}
                onChange={this.handleInputChange}
                name="password2" placeholder="Password2" />
                </div>
                
                <button type="submit" className="btn btn-primary"
                // disabled={!(this.state.user && this.state.password)}
                onClick={this.handleFormSubmit}>Submit</button>
            </form>
            </div>
            <div className="col-3"></div>
            </div>
        </div>

           
            
            
            </Wrapper>
        
          
        
          );
    }
}
export default SignUp;

