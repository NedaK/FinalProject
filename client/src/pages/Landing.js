import React, {Component} from 'react';


import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Wrapper from '../components/Wrapper'


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
            <Wrapper>
        
            <Nav />
                
            <Body showClosedPolls={this.showClosedPolls}/>
            <Footer />
            </Wrapper>
        
          
        
          );
}
}
export default Landing;