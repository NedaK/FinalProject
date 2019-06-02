import React, {Component} from 'react';

import { Parallax, Background } from 'react-parallax';
import Nav from '../components/Nav'
//import Footer from '../components/Footer'
//import Body from '../components/Body'
import Wrapper from '../components/Wrapper'


import API from "../utils/API";
//import { Link } from "react-router-dom";
import PollCard from '../components/PollCard';



class UserHome extends Component{
    state={
        user:{},
        firstName: "",
        polls: [],
        trendingPolls: [],
        updatedVote: []

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
                    //console.log(this.state.polls[0].title)
                })
            });
        });
            API.getOpenPolls()
            .then(function(resp){
                
                let openPolls = resp.data;
                console.log(openPolls);
                currentComponent.setState({
                    trendingPolls: openPolls
                }, function (resp){
                    console.log(this.state.trendingPolls.length);
                })
            })
        }
        else{
            console.log("Not authenticated user");
            this.props.history.push('/login');
        } 
    }

    handleVotes = event =>{
        //let currentComponent = this;
        event.preventDefault();
        const pollID = event.target.id;
        const votePoint = pollID.split("_");
        // console.log(pollID)
        // console.log(votePoint[0])
        API.updatePoll(votePoint[1], votePoint[0])
        .then((resp)=>{
            
            console.log(resp.data._id)

            
            const index = this.state.trendingPolls.map(poll => poll._id).indexOf(resp.data._id)
            //const index = this.state.trendingPolls.indexOf(resp.data._id);
            console.log(index)
            this.state.trendingPolls.splice(index, 1, resp.data)
            console.log(this.state.trendingPolls)
            //const result = this.state.trendingPolls.filter(poll => poll._id !== resp.data._id)
            //console.log(result)
             //const joined = result.concat(resp.data);
            this.setState({ trendingPolls: this.state.trendingPolls })
            
        })

    }

    handleLogoutSubmit = event  =>{
        event.preventDefault();
        this.props.handleLogout();
              
        this.props.history.push('/')

    }

    setWinnerOrTimeRemaining = (closingDate) =>{
        console.log(Date.parse(closingDate))
        let today = Date.now();
        let closing = Date.parse(closingDate)
        console.log(today)
        let hoursRemaining = Math.floor((closing - today) / 36e5)
        console.log(hoursRemaining);
        return hoursRemaining + " hours"
        //(1000*60*60*24)
    }


    render(){
       
        
        return (
            <Wrapper>
        
            <Nav user={this.props.user.payload.email} 
                handleLogoutSubmit={this.handleLogoutSubmit}/>

        <div style={{ height: '200px' }} />

        <Parallax
            blur={7}
            
            style = {{backgroundColor:'rgb(0,0,0,0.5)'}}
            
            strength={200}
        >
             <div className="container" >
                <h2>Current Polls</h2>
                <div className = "card-deck" id="current-items">
                
                {this.state.polls.length > 0 ?(
                    this.state.polls.map(object => (
                     <PollCard title={object.title} key={object._id} author = {object.author}
                     user={this.props.user.payload.id} id={object._id} handleVotes = {this.handleVotes}
                     heSaid = {object.heSaid} heSaidVotes = {object.heSaidVotes}
                     sheSaid = {object.sheSaid} sheSaidVotes = {object.sheSaidVotes}
                     closed = {object.is_closed} winner = {object.winner} 
                     remaining = {this.setWinnerOrTimeRemaining(object.closing_date)}
                     />))
                ) : null }
                
                
                </div>
            
            </div>
            <div style={{ height: '150px' }} />
            </Parallax>
                
           

            <div style={{ height: '150px' }} />
            <Parallax
            blur={10}
            style = {{backgroundColor:'rgb(0,0,0,0.6)'}}
            // bgImage={require('../images/wall.jpeg')}
           
            strength={200}
        >
            <div className="container">
            <h2>Trending Polls</h2>
                <div className = "card-deck" id="trending-items">
                
                {this.state.trendingPolls.length > 0 ?(
                    this.state.trendingPolls.map(object => (
                     <PollCard handleVotes= {this.handleVotes} title={object.title} key={object._id}
                     id={object._id} author = {object.author} user={this.props.user.payload.id}
                     heSaid = {object.heSaid} heSaidVotes = {object.heSaidVotes}
                     sheSaid = {object.sheSaid} sheSaidVotes = {object.sheSaidVotes}
                     closed = {object.is_closed} winner = {object.winner}
                     remaining = {this.setWinnerOrTimeRemaining(object.closing_date)}
                     />))
                ) : null }



                </div>
            
            </div>
            <div style={{ height: '150px' }} />
                </Parallax>
                <div style={{ height: '150px' }} />
            
            {/* <Footer /> */}
            </Wrapper>
        
          
        
          );
}
}
export default UserHome;