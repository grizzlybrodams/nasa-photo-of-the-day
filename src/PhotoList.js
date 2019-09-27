import React, {useState, useEffect}from "react";
import PhotoData from "./PhotoData.js"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Spinner} from "reactstrap";
   
   export default function PhotoList() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    
     axios
     .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     .then(result => {
         setData(result.data)
     })
     .catch( err =>{
         console.log(err);
     });

  },[]);

  return(
      <div className= "space">
          <Button>Hello World!</Button>
            <div>
                <Spinner type= "grow" color="primary" />
               
            </div>
          <PhotoData

            title={data.title}
            date={data.date}
            url={data.hdurl}
            explanation={data.explanation}
            />
      </div>

  );

}

//"https://api.nasa.gov/planetary/apod?api_key=bZg0BLW99CDfcNUylyXQ3RfGmN4WvETBsdRd6YsR"