import React, {Component} from 'react';

//import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from '../components/Nav'
import Table from '../components/Table'

import Wrapper from '../components/Wrapper'
import API from "../utils/API";

class ManagePolls extends Component{
    state = {
        athor:"",
        title: "",
        heSaid: "",
        sheSaid: "",
        poll_TimeLength:"",
        userPolls:[],
        page:"managePolls"
        
    }
    componentDidMount(){
console.log("PAge" + this.state.page)
      API.getUserPolls(this.props.user)
      .then((resp)=>{     
        this.setState({
          userPolls: resp.data,
          //page: "managePolls"
        })
      })
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
            token: this.props.user.token,
            author: this.props.user.payload.id,
            title:this.state.title,
            heSaid:this.state.heSaid,
            sheSaid:this.state.sheSaid,
            poll_TimeLength: this.state.poll_TimeLength
            
          })
            .then(res => {
              console.log("Data returned from created poll" + JSON.stringify(res.data));
              //redirect back to user home page with reload to see new poll in current poll section
              this.props.history.push('/userhome')
            })
            .catch(err => console.log(err));
        
      };

      handleDelete = (id) =>{
        const token = this.props.user.token;
        console.log("Delete token" + this.props.user.token)
        console.log(id)
        API.deletePoll(id, token)
        .then( res =>{
          console.log("Returned from delete poll" +  JSON.stringify(res.data));
          this.props.history.push('/userhome')
        })
        .catch(err => console.log(err));
      }

      handleLogoutSubmit = event  =>{
        event.preventDefault();
        this.props.handleLogout();
              
        this.props.history.push('/')

    }


    render(){
    return (
    <Wrapper>
    <Nav user={this.props.user.payload.email} page={this.state.page}
    handleLogoutSubmit={this.handleLogoutSubmit}/>

    {/* <div className="container-fluid"> */}
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6 mx-auto" id="signin">
          <h2>Create a New Poll</h2>
            <form id="login-form" >
                <div className="form-group">
                    <label>Poll Title</label>
                    <input type="text" className="form-control" id="title" 
                        value={this.state.title} name="title"
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

                <div className="form-group">
                    <label>Days of Poll: </label>
                    <input type="text" className="form-control" id="poll_length" 
                    value={this.state.poll_TimeLength} name="poll_TimeLength"
                    onChange={this.handleInputChange}placeholder="Days of Poll" />
                </div>

                <button type="submit" className="btn btn-primary"
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}>Submit</button>
            </form>
        </div>
        <div className="col-3"></div>      
    </div>
    <div className = "row"style={{ height: '250px' }}></div>
      <div className= "userPolls">
          {this.state.userPolls.length > 0 ?(    
               <table className = "table table-striped">
                 <tbody>
                 <tr>
                    <th>Title</th>
                    <th>He Said</th> 
                    <th>She Said</th>
                    <th>Winner</th>
                    <th>Delete?</th>
                  </tr>
                        {this.state.userPolls.map(object =>(
                  <Table 
                    key={object._id}
                    title = {object.title}
                    heSaid = {object.heSaid}
                    sheSaid = {object.sheSaid}
                    winner = {object.winner}
                    id={object._id}
                    handleDelete = {this.handleDelete}
                  
                />
                )) }</tbody></table>
              
              ): null}
                
          </div>    
               
              

{/* </div> */}

    
    
    
    </Wrapper>

  

  );
}
}
export default ManagePolls;

