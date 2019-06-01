import React, {Component} from 'react';

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



class Landing extends Component{

    state = {
        closedPolls: [],

    }

    componentDidMount() {
        //this.loadPolls();
        //this.updateClosedPolls();
      

     
       API.updateClosedPolls()
       .then(res => {
         console.log(res.data)
         
       })
     
      }
    // loadPolls = () => {
    //     API.getPolls()
    //       .then(res =>{
    //         console.log(res.data)
    //         this.setState({ polls: res.data})
            
    //       })
    //       .catch(err => console.log(err));
    //   };
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
            //  <Wrapper>
        <Container fluid>
            <Nav />
            
           <Body showClosedPolls={this.showClosedPolls} />
              {this.state.closedPolls.length > 0 ?(
               
                this.state.closedPolls.map(object =>(
                  <Table 
                    key={object._id}
                    title = {object.title}
                    heSaid = {object.heSaid}
                    sheSaid = {object.sheSaid}
                    winner = {object.winner}
                  
                />))
              
              ): null}
                    
                    
              
            
            <Footer />

            </Container>
            // </Wrapper>
        
          
        
          );
}
}
export default Landing;