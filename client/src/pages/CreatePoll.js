import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from '../components/Nav'

import Wrapper from '../components/Wrapper'
import API from "../utils/API";

class CreatePoll extends Component{
    state = {
        athor:"",
        title: "",
        heSaid: "",
        sheSaid: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        
          API.savePoll({
            author: this.props.user.payload.id,
            title:this.state.title,
            heSaid:this.state.heSaid,
            sheSaid:this.state.sheSaid
            
          })
            .then(res => {
              console.log("Data returned from created poll" + JSON.stringify(res.data));
              //redirect back to user home page with reload to see new poll in current poll section

            })
            .catch(err => console.log(err));
        
      };


    render(){
    return (
    <Wrapper>
    <Nav />

    <div className="container">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6 mx-auto" id="login">
            <form id="login-form" >
                <div className="form-group">
                    <label>Poll Title</label>
                    <input type="email" className="form-control" id="title" 
                        value={this.state.email} name="title"
                        onChange={this.handleInputChange} aria-describedby="pollTitle" placeholder="Enter title" />
                    
                </div>

                <div className="form-group">
                    <label>He Said:</label>
                    <input type="text" className="form-control" id="heSaid" 
                    value={this.state.heSaid} name="heSaid"
                    onChange={this.handleInputChange}placeholder="heSaid" />
                </div>

                <div className="form-group">
                    <label>She Said: </label>
                    <input type="text" className="form-control" id="sheSaid" 
                    value={this.state.sheSaid} name="sheSaid"
                    onChange={this.handleInputChange}placeholder="sheSaid" />
                </div>

                <button type="submit" className="btn btn-primary"
                // disabled={!(this.state.email && this.state.password)}
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
export default CreatePoll;

