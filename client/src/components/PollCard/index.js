import React from 'react';


import "./style.css";
// import { Link } from "react-router-dom";


function PollCard(props){
    return(
        <div className="card col-6">
        <div className="card-body" key={props.id}>
            <h5 className="card-title">Title: {props.title}</h5>
            
            <p className="card-text">He Said: {props.heSaid}</p>
            <p className="card-text">She Said: {props.sheSaid}</p>
            <button type="submit" className="btn btn-primary" onClick = {props.handleVotes} 
                id={`heSaidVotes_${props.id}`}>Vote HeSaid</button>
            <p className="card-text">HeSaid Vote Number: {props.heSaidVotes}</p>
            <button type="submit" className="btn btn-primary" onClick = {props.handleVotes}
            id={`sheSaidVotes_${props.id}`}>Vote SheSaid</button>
            <p className="card-text">SheSaid Vote Number: {props.sheSaidVotes}</p>
            
        </div>
        </div>
    )


}
export default PollCard;
