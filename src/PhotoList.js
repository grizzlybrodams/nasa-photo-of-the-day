import React, { useState, useEffect } from "react";
import PhotoData from "./PhotoData.js";
import axios from "axios";
import { Button, Spinner } from "reactstrap";

// class btnck extends PhotoData{
//     click =(e) => {
//         console.log('clicked')
//     }
// }
export default function PhotoList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=bZg0BLW99CDfcNUylyXQ3RfGmN4WvETBsdRd6YsR"
      )
      .then(result => {
        setData(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
    /* <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button> */
  
  return (
    <div className="text-muted">
      <Button className="text-muted" color="warning" size="lg">
        Explore Space!
      </Button>

      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color ="danger"/>
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="warning" />
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
