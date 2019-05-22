import React, {Component} from 'react';


import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Wrapper from '../components/Wrapper'


import API from "../utils/API";
import { Link } from "react-router-dom";
import PollCard from '../components/PollCard';



class UserHome extends Component{
    state={
        user:{},
        firstName: "",
        polls: []


    }

    componentDidMount(){
        //console.log(this.props.user);
        let currentComponent = this;
        if (this.props.user) {
            this.setState({
                user : this.props.user
            }, function (err, resp){
                if (err)
                    {
                        console.error(err);
                    }            
            console.log("Props passes down" + JSON.stringify(this.state.user));
            API.getUserPolls(this.state.user.payload.id)
            .then(function(res) {
                console.log("Resp" + JSON.stringify(res.data));
                let userPolls = res.data;
                //let userPolls = res.data.polls;
                console.log(userPolls);
                currentComponent.setState({
                    polls: userPolls
                }, function (err, resp){
                    console.log(this.state.polls[0].title)
                })
            });
        });
            //console.log(this.props.user.payload.id);
            // API.getUserData(this.props.user).then(function(res) {
            //     console.log(res.data);
            //});
        }
        else{
            console.log("Not authenticated user");
            this.props.history.push('/login');
        } 
    }
    handleLougoutSubmit = event  =>{
        event.preventDefault();
        this.props.handleLogout();
              
        this.props.history.push('/')

    }

    render(){
       
        
        return (
            <Wrapper>
        
            <Nav user={this.props.user.payload.email} />
                {/* onClick={this.props.handleLogout} */}
                <div>
                <button type="submit" className="btn btn-primary"
                        
                        onClick={this.handleLougoutSubmit}>Logout</button>
                </div>
            <div className="container">
                <div id="current-items">
                <h3>Current Polls</h3>
                {this.state.polls.length > 0 ?(
                    this.state.polls.map(object => (
                     <PollCard title={object.title} key={object._id}
                                heSaid = {object.heSaid}
                                sheSaid = {object.sheSaid}
                     />))
                ) : null }
                
                
                </div>
            
            </div>

            <div className="container">
                <div id="trending-items">
                <h3>Trending Polls</h3>
                <PollCard/>
                </div>
            
            </div>
            
                
            
            <Footer />
            </Wrapper>
        
          
        
          );
}
}
export default UserHome;