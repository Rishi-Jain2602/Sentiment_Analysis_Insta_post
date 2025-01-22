import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles/Image.css'
import { Link } from 'react-router-dom';

export default function Image() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.post('https://sentiment-analysis-insta-post.vercel.app/db/fetchImg')
    axios.post('http://localhost:5000/db/fetchImg')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });

  }, []);
  


  return (
    <div className="container">
      {data.map((item,index) => (
        <div key={item._id} className="card mb-4" >
          <div className="count-badge">{index + 1}</div>
          <img src={`data:image/jpeg;base64,${item.image_data}`} className="card-img-top" alt={"Not Able to fetch the Image"} />


          <div className="card-body">

            <h5 className="card-title">{item.ownerFullName}</h5>
            <p className="card-text">{item.caption}</p>
            <p className="card-text"><strong>Tajness Score:</strong> {item["Tajness Score"]}</p>
            <p className="card-text"><strong>Score Explanation</strong>
              {item['score_explanation']}
            </p>
            <p className="card-text"><strong>Permission:</strong> {item.Permission ? 'Granted' : 'Not Granted'}</p>
            <p className="card-text"><strong>Reason:</strong> {item.Reason || 'No reason provided'}</p>
            <p className="card-text"><strong>BioGraphy:</strong> {item.BioGraphy}</p>
            <p className="card-text"><strong>Description:</strong>
              {item["Data Collection"] && item["Data Collection"].description
                ? item["Data Collection"].description
                : "No Description provided"}
            </p>
            <p className="card-text"><strong>Identified Hotel:</strong>
              {item["Data Collection"] && item["Data Collection"].IdentifiedHotel
                ? 'Yes'
                : 'No'}
            </p>
            <p className="card-text"><strong>Hotel Name:</strong>
              {item["Data Collection"] && item["Data Collection"].HotelName
                ? item["Data Collection"].HotelName
                : 'No Hotel Name is Available'}
            </p>
            <p className="card-text"><strong>Relation:</strong>
              {item["Data Collection"] && item["Data Collection"].Relation
                ? item["Data Collection"].Relation
                : 'No Relation available'}
            </p>
            <p className="card-text"><strong>Inhouse/Wild:</strong>
              {item["Data Collection"] && item["Data Collection"].Inhouse_Wild
                ? 'Yes'
                : 'No'}
            </p>
            <p className="card-text"><strong>Categories</strong>
              {item['Categories']}
            </p>

            <p className="card-text"><strong>Hashtags:</strong> {item.hashtag.join(', ') || 'No Hashtags are there'}</p>
            <Link to={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Instagram</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
