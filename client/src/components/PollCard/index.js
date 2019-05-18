import React from 'react';


import "./style.css";
// import { Link } from "react-router-dom";


function PollCard(props){
    return(
        <div className="card col-6">
        <div className="card-body">
            <h5 className="card-title">Poll Title</h5>
            
            <p className="card-text">He Said: Blah blah blah</p>
            <p className="card-text">She Said: Blah blah blah</p>
            <a href="#" className="card-link">Vote HeSaid</a>
            <a href="#" className="card-link">Vote SheSaid</a>
        </div>
        </div>
    )


}
export default PollCard;
