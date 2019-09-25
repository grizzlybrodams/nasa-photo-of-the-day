import React from "react";
import "./App.css";


export default function PhotoList(props){
    return(
        <div className="PhotoData" media_type={props.image}>
        <h1>Title{props.title}</h1>
        <h2>Date {props.date}</h2>
        <p>{props.explanation}</p>
        </div>
    );
}