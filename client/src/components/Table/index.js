import React from 'react';


import "./style.css";
//import DeleteBtn from '../DeleteBtn';
// import { Link } from "react-router-dom";


function Table(props){
    return(
        // <table>
        //     <caption>Check out these Closed Polls!</caption>
        //     <tbody>
            <tr>
                <td>{props.title}</td>
                <td>{props.heSaid}</td>
                <td>{props.sheSaid}</td>
                <td>{props.winner}</td>
                {(props.id)?(
                <td><button type="submit" className="btn btn-success" 
                    onClick ={()=> props.handleDelete(props.id)} id={props.id}>DELETE</button> </td>
                // <td><DeleteBtn onClick = {props.handleDelete(props.id)} id={props.id}/></td>
                ): null}
            </tr>
        //     </tbody>
        // </table>
    )


}
export default Table;
