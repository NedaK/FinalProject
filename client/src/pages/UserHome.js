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
        username: "Neda",

    }

    render(){
        return (
            <Wrapper>
        
            <Nav user={this.state.username}/>
            <div class="container">
                <div id="current-items">
                <h3>Current Polls</h3>
                <PollCard/>
                </div>
            
            </div>

            <div class="container">
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