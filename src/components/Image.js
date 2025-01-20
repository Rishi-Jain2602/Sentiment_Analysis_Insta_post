import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles/Image.css'

export default function Image() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('https://sentiment-analysis-insta-post.vercel.app/db/fetchImg')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });

  }, []);
  


  return (
    <div className="container">
      {data.map((item) => (
        <div key={item._id} className="card mb-4" >
          <img src={item.dislayurl} className="card-img-top" alt={"Not Able to fetch the Image"} />
          
        
          <div className="card-body">
            <h5 className="card-title">{item.ownerFullName}</h5>
            <p className="card-text">{item.caption}</p>
            <p className="card-text"><strong>Tajness Score:</strong> {item["Tajness Score"]}</p>
            <p className="card-text"><strong>Permission:</strong> {item.Permission ? 'Granted' : 'Not Granted'}</p>
            <p className="card-text"><strong>Reason:</strong> {item.Reason || 'No reason provided'}</p>
            <p className="card-text"><strong>BioGraphy:</strong> {item.BioGraphy}</p>
            <p className="card-text"><strong>Description:</strong> {item["Data Collection"].description}</p>
            <p className="card-text"><strong>Identified Hotel:</strong> {item["Data Collection"].IdentifiedHotel ? 'Yes' : 'No'}</p>
            <p className="card-text"><strong>Hotel Name:</strong> {item["Data Collection"].HotelName || 'No Hotel Name is Available'}</p>
            <p className="card-text"><strong>Relation:</strong> {item["Data Collection"].Relation}</p>
            <p className="card-text"><strong>Inhouse/Wild:</strong> {item["Data Collection"].Inhouse_Wild ? 'Yes' : 'No'}</p>

            <p className="card-text"><strong>Hashtags:</strong> {item.hashtag.join(', ') || 'No Hashtags are there'}</p>
            <a href={item.url} className="btn btn-primary">View on Instagram</a>
          </div>
        </div>
      ))}
    </div>
  );
}
