import React, {Component} from 'react';
import "./style.css";
import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Table from '../components/Table'
import Wrapper from '../components/Wrapper'
//import Modal from '../components/Modal'


import API from "../utils/API";
//import { Link } from "react-router-dom";
//import { threadId } from 'worker_threads';

import Scrollspy from 'react-scrollspy'
 
 


class Landing extends Component{

    state = {
        closedPolls: [],

    }

    componentDidMount() {
        
       API.updateClosedPolls()
       .then(res => {
         console.log(res.data)
         
       })
     
      }
    
    showClosedPolls = event => {
      event.preventDefault();
      API.getClosedPolls()
      .then((resp) => {
        console.log(resp.data)
        this.setState({
          closedPolls: resp.data
        })
      })
    }

    render(){

  
        return (
             <Wrapper>
        {/* <Container fluid> */}
            <Nav />
            
 
  {/* <div style={{ height: '100px' }}></div> */}
            
 
  <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
    <li><a href="#section-1">section 1</a></li>
    
  </Scrollspy>
 


            
           <Body showClosedPolls={this.showClosedPolls} />
           <div style={{ height: '250px' }}></div>
              {this.state.closedPolls.length > 0 ?(
               <div className= "closedPolls" id="section-1">
                 
               <table className = "table">
                 <tbody>
                 <tr>
                    <th>Title</th>
                    <th>He Said</th> 
                    <th>She Said</th>
                    <th>Winner</th>
                  </tr>
                        {this.state.closedPolls.map(object =>(
                  <Table 
                    key={object._id}
                    title = {object.title}
                    heSaid = {object.heSaid}
                    sheSaid = {object.sheSaid}
                    winner = {object.winner}
                  
                />
                )) }</tbody></table></div> 
              
              ): null}
                    
               
              
            
            <Footer />
            <div style={{ height: '250px' }}></div>
            <div style={{ height: '250px' }}></div>
            <div style={{ height: '250px' }}></div>
            <div style={{ height: '250px' }}></div>
            

            {/* </Container> */}
            </Wrapper>
        
          
        
          );
}
}
export default Landing;