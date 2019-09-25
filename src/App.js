import React, {useState, useEffect}from "react";
import "./App.css";
import axios from "axios";
import PhotoData from "./PhotoList.js"

//bZg0BLW99CDfcNUylyXQ3RfGmN4WvETBsdRd6YsR
//https://api.nasa.gov/planetary/apod?api_key=bZg0BLW99CDfcNUylyXQ3RfGmN4WvETBsdRd6YsR

 function App() {
   const [data, setData] = useState('PhotoData');

   useEffect(()=> {
     async function fetchData() {
       try{
         const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=bZg0BLW99CDfcNUylyXQ3RfGmN4WvETBsdRd6YsR");
       console.log(photoData.data);
       setData(photoData.data);
       console.log(data);
       }catch(error){
         console.log(error);
       }
      } 
      fetchData()
   },[]);
 

 
   return (
    <div className="App">
      <PhotoData
      title={App.title}
      explanation={App.explanation}
      date={App.date}
      url={App.url}
      />
      <h1>
        NASA APOD
      </h1>
    </div>
  );
}

export default App;
