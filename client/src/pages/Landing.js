import React, {Component} from 'react';
import "./style.css";
//import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Table from '../components/Table'
import Wrapper from '../components/Wrapper'
//import Modal from '../components/Modal'


import API from "../utils/API";
//import { Link } from "react-router-dom";
//import { threadId } from 'worker_threads';

//import Scrollspy from 'react-scrollspy'
 
 


class Landing extends Component{

    state = {
        closedPolls: [],

    }

    constructor(props) {
      super(props)
      this.myRef = React.createRef()   // Create a ref object 
  }

  

    componentDidMount() {
        
       API.updateClosedPolls()

      //  figure out how to handle this error and response
       .then(res => {
         console.log(res.data)
         
       }).catch(err =>{
         console.log(err)
       })
     
      }

      scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
  // run this method to execute scrolling. 

  
    
    showClosedPolls = event => {
      event.preventDefault();
      API.getClosedPolls()
      .then((resp) => {
        console.log(resp.data)
        this.setState({
          closedPolls: resp.data
        })
      })
      .then(this.scrollToMyRef());
    }

    render(){

  
        return (
             <Wrapper>
        
            <Nav />
            
 
  {/* <div style={{ height: '100px' }}></div> */}
            
 
  {/* <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
    <li><a href="#section-1">section 1</a></li>
    
  </Scrollspy> */}
 


            
           <Body showClosedPolls={this.showClosedPolls} scrollToMyRef={this.scrollToMyRef}/>
           <div  style={{ height: '150px' }}></div>
           <div className= "closedPolls" ref={this.myRef} id="section-1">
              {this.state.closedPolls.length > 0 ?(
              //  <div className= "closedPolls"  id="section-1">
                 
               <table className = "table table-striped">
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
                )) }</tbody></table>
              
              ): null}
                    
            </div> 
              
            
            <Footer />
            <div style={{ height: '250px' }}></div>
            <div style={{ height: '250px' }}></div>
            {/* <div style={{ height: '250px' }}></div>
            <div style={{ height: '250px' }}></div> */}
            

            </Wrapper>
        
          
        
          );
}
}
export default Landing;