import React from 'react';


import "./style.css";
import { userInfo } from 'os';
// import { Link } from "react-router-dom";


function PollCard(props){

    if (props.closed === false && props.author !== props.user){
        return(
            <div className="card">
            <div className="card-body" key={props.id} author={props.author}>
            <h3 className="card-header">{props.title}</h3>
                {/* <h5 className="card-title">Title: {props.title}</h5> */}
                
                <p className="card-text">He Said ~ {props.heSaid}</p>
                <p className="card-text">HeSaid Vote Number: {props.heSaidVotes}</p>
                <button type="submit" className="btn btn-success" onClick = {props.handleVotes} 
                    id={`heSaidVotes_${props.id}`}>Vote HeSaid</button>
                    

                    <hr />
                <p className="card-text">She Said ~ {props.sheSaid}</p>     
                <p className="card-text">SheSaid Vote Number: {props.sheSaidVotes}</p>
                <button type="submit" className="btn btn-success" onClick = {props.handleVotes}
                id={`sheSaidVotes_${props.id}`}>Vote SheSaid</button>
                
                <div className="card-footer">Time remaining : {props.remaining} </div>
                {/* <p>Time remaining : {props.remaining} </p> */}
                
            </div>
            </div>
        )
    }
    else{
            if(props.closed === true){
                return(
                    <div className="card">
                    <div className="card-body" key={props.id} author={props.author}>
                    <h3 className="card-header">{props.title}</h3>
                        {/* <h5 className="card-title">Title: {props.title}</h5> */}
                        
                        <p className="card-text">He Said ~ {props.heSaid}</p>
                        <p className="card-text">She Said ~ {props.sheSaid}</p>
                        
                        <p className="card-text">HeSaid Vote Number: {props.heSaidVotes}</p>
                        
                        <p className="card-text">SheSaid Vote Number: {props.sheSaidVotes}</p>
                        <div className="card-footer">Winner: {props.winner}</div>
                        {/* <p className="card-text">Winner: {props.winner}</p> */}
                        {/* <p>Time remaining : {props.remaining} </p> */}
                        
                        
                    </div>
                    </div>
                )
            }
            return(
                <div className="card">
                <div className="card-body" key={props.id} author={props.author}>
                <h3 className="card-header">{props.title}</h3>
                    {/* <h5 className="card-title">Title: {props.title}</h5> */}
                    
                    <p className="card-text">He Said ~ {props.heSaid}</p>
                    <p className="card-text">She Said ~ {props.sheSaid}</p>
                    
                    <p className="card-text">HeSaid Vote Number: {props.heSaidVotes}</p>
                    
                    <p className="card-text">SheSaid Vote Number: {props.sheSaidVotes}</p>
    
                    {/* <p className="card-text">Winner: {props.winner}</p> */}
                    <div className="card-footer">Time remaining : {props.remaining} </div>
                    {/* <p>Time remaining : {props.remaining} </p> */}
                    
                    
                </div>
                </div>
            )

        
        
    }
    


}
export default PollCard;
