import React, {Component} from 'react';


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
            //this.forceUpdate();
            console.log(resp.data._id)

            //myArray.map(x => x.hello).indexOf('stevie')
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



    render(){
       
        
        return (
            <Wrapper>
        
            <Nav user={this.props.user.payload.email} 
                handleLogoutSubmit={this.handleLogoutSubmit}/>
                {/* <div>
                <button type="submit" className="btn btn-primary"
                        
                        onClick={this.handleLogoutSubmit}>Logout</button>
                </div> */}
            <div className="container">
                <div id="current-items">
                <h3>Current Polls</h3>
                {this.state.polls.length > 0 ?(
                    this.state.polls.map(object => (
                     <PollCard title={object.title} key={object._id}
                     id={object._id} handleVotes = {this.handleVotes}
                     heSaid = {object.heSaid} heSaidVotes = {object.heSaidVotes}
                     sheSaid = {object.sheSaid} sheSaidVotes = {object.sheSaidVotes}
                     />))
                ) : null }
                
                
                </div>
            
            </div>

            <div className="container">
                <div id="trending-items">
                <h3>Trending Polls</h3>
                {this.state.trendingPolls.length > 0 ?(
                    this.state.trendingPolls.map(object => (
                     <PollCard handleVotes= {this.handleVotes} title={object.title} key={object._id}
                     id={object._id}
                     heSaid = {object.heSaid} heSaidVotes = {object.heSaidVotes}
                     sheSaid = {object.sheSaid} sheSaidVotes = {object.sheSaidVotes}
                     />))
                ) : null }



                </div>
            
            </div>
            
                
            
            {/* <Footer /> */}
            </Wrapper>
        
          
        
          );
}
}
export default UserHome;