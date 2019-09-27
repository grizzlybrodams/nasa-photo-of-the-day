import React from "react";


export default function PhotoData(props){
    return(
        <div className="PhotoData" key={props.id} >
        <h2>Title{props.title}</h2>
        <h2>Date {props.date}</h2>
        <img src ={props.url} alt="space"></img> 
        <p>{props.explanation}</p>
        </div>
    );
}

