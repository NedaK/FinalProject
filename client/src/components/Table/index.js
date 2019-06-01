import React from 'react';


import "./style.css";
// import { Link } from "react-router-dom";


function Table(props){
    return(
        <table>
            <caption>Check out these Closed Polls!</caption>
            <tbody>
            <tr>
                <td>Title: {props.title}</td>
                <td>HeSaid: {props.heSaid}</td>
                <td>SheSaid: {props.sheSaid}</td>
                <td>Winner: {props.winner}</td>
            </tr>
            </tbody>
        </table>
    )


}
export default Table;
