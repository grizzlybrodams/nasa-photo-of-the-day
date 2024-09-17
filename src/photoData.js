import React from "react";
import {Card, CardText, CardBody, CardTitle, CardImg, } from "reactstrap";

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

// export default function NewPhotoData(props){
//     return(
//         <Card height="100%"></Card>
//         <CardBody height="100%">
//             <CardTitle>{props.title}</CardTitle>
//           <hr />
//           <CardText>{props.description}</CardText>
//           <hr />
//         </CardBody>
//     )
// }