import React, {Component} from 'react';


import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Wrapper from '../components/Wrapper'


import API from "../utils/API";
import { Link } from "react-router-dom";



class Landing extends Component{

    render(){

  
        return (
            <Wrapper>
        
        
        
            <Nav />
                
            <Body />
            <Footer />
            </Wrapper>
        
          
        
          );
}
}
export default Landing;