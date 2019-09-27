import React from "react";
import "./App.css";
import PhotoList from "./PhotoList";
import {Badge } from "reactstrap";

   function App() {
     return(
       <div className="headertitle">
         <h1><Badge color="danger">NASA APOD</Badge> </h1>
         <PhotoList/>

       
       
       
       
       </div>


     )
   }
  
 
  

export default App
 
