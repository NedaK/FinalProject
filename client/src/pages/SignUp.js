import React, {Component} from 'react';


import Nav from '../components/Nav'

import Wrapper from '../components/Wrapper'
import LoginForm from '../components/LoginForm'
import SignInForm from '../components/SignInForm'


import API from "../utils/API";
import { Link } from "react-router-dom";



class SignUp extends Component{

    render(){

  
        return (
            <Wrapper>
            <Nav />
            <SignInForm />
            {/* <div className="container">
                <div className="row">
                <div className="col-8 mx-auto">


                <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
            </div>
            </div>
             */}
            
            
            
            </Wrapper>
        
          
        
          );
    }
}
export default SignUp;

