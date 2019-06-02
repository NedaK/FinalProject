import React from 'react';


import "./style.css";
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
            </tr>
        //     </tbody>
        // </table>
    )


}
export default Table;
