import React, {Component} from 'react';


import Nav from '../components/Nav'

import Wrapper from '../components/Wrapper'
//import LoginForm from '../components/LoginForm'


import API from "../utils/API";
//import { Link } from "react-router-dom";



class Login extends Component{

    state={
        email: "",
        password: ""
      }

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        
          API.findUser({
            
            email:this.state.email,
            password: this.state.password
          })
            .then(res => {
              console.log("Data returned from login" + JSON.stringify(res.data));

              this.props.handleLogin(res.data);
              
              this.props.history.push('/userhome')
            })
            .catch(err => console.log(err));
        
      };

    render(){

  
        return (
            <Wrapper>
            <Nav />

            
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mx-auto" id="signin">
                    <form id="login-form" >
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email" 
                                value={this.state.email} name="email"
                                onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="Enter email" />
                            
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" 
                            value={this.state.password} name="password"
                            onChange={this.handleInputChange}placeholder="Password" />
                        </div>
  
                        <button type="submit" className="btn btn-primary"
                        disabled={!(this.state.email && this.state.password)}
                        onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
                <div className="col-3"></div>      
            </div>
        
    
            
            </Wrapper>
        
          
        
          );
    }
}
export default Login;

