import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Styles/Video.css'
import { Link } from 'react-router-dom'

export default function Video() {
  const [data, setData] = useState([]);
  const [expandedCaption, setExpandedCaption] = useState(null);
  const [expandedFrameDesc, setExpandedFrameDesc] = useState(null);
  const [expandedOralTranscript, setExpandedOralTranscript] = useState(null);

  const toggleCaption = (id) => {
    setExpandedCaption(expandedCaption === id ? null : id);
  };

  const toggleFrameDesc = (id) => {
    setExpandedFrameDesc(expandedFrameDesc === id ? null : id);
  };

  const toggleOralTranscript = (id) => {
    setExpandedOralTranscript(expandedOralTranscript === id ? null : id);
  };


  useEffect(() => {
    axios.post('https://sentiment-analysis-insta-post.vercel.app/db/fetchVid')
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
          <div className="card-body">
            <h5 className="card-title">{item.Result.ownerFullName}</h5>
            {item.VideoUrl ? ( // Check if VideoUrl exists before rendering
              <div className="video-container">
                <video controls className="video-player">
                  <source src={item.VideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <p>No video available</p> // Display if VideoUrl is missing
            )}
            <p className="card-text">{item.caption}</p>
            <p className="card-text"><strong>BioGraphy:</strong> {item['Data_Collection']['Biography of User'] || 'Nothing to show'}</p>
            {/* <p className="card-text"><strong>Caption:</strong> {item["Data_Collection"]['Caption']}</p> */}

            {/* Caption */}
            <p className="card-text">
              <strong>Caption:</strong>
              {expandedCaption !== item._id ? (
                <span className="truncate">
                  {item["Data_Collection"]['Caption']}
                </span>
              ) : (
                <span>
                  {item["Data_Collection"]['Caption']}
                </span>
              )}
            </p>
            <Link to="#!" onClick={() => toggleCaption(item._id)}>
              {expandedCaption === item._id ? 'Read Less' : 'Read More'}
            </Link>
            {/* Frame Description */}
            <p className="card-text py-2">
              <strong>Frame Description:</strong>
              {expandedFrameDesc !== item._id ? (
                <span className="truncate">
                  {item["Data_Collection"]['Frame Description']}
                </span>
              ) : (
                <span>
                  {item["Data_Collection"]['Frame Description']}
                </span>
              )}
            </p>
            <Link to="#!" onClick={() => toggleFrameDesc(item._id)}>
              {expandedFrameDesc === item._id ? 'Read Less' : 'Read More'}
            </Link>

            {/* Oral Transcript */}
            <p className="card-text py-2">
              <strong>Oral Transcript:</strong>
              {expandedOralTranscript !== item._id ? (
                <span className="truncate">
                  {item["Data_Collection"]['Oral Transcript']}
                </span>
              ) : (
                <span>
                  {item["Data_Collection"]['Oral Transcript']}
                </span>
              )}
            </p>
            <Link to="#!" onClick={() => toggleOralTranscript(item._id)}>
              {expandedOralTranscript === item._id ? 'Read Less' : 'Read More'}
            </Link>

            {/* <p className="card-text py-2"><strong>Oral Transcript:</strong> {item["Data_Collection"]['Oral Transcript']}</p> */}
            <p className="card-text"><strong>Identified Hotel:</strong> {item["Summary"].IdentifiedHotel ? 'Yes' : 'No'}</p>
            <p className="card-text"><strong>Tajness Score:</strong> {item["TajNess Score"]}</p>
            <p className="card-text"><strong>Score Explanation</strong>
              {item['score_explanation']}
            </p>
            <p className="card-text"><strong>Hotel Name:</strong> {item["Summary"]['Hotel Name'] || 'No Hotel Name is Available'}</p>
            <p className="card-text"><strong>Permission:</strong> {item.Permission ? 'Granted' : 'Not Granted'}</p>
            <p className="card-text"><strong>Reason:</strong> {item.Reason || 'No reason provided'}</p>
            <p className="card-text"><strong>Relation:</strong> {item["Summary"]['Relation to the brand']}</p>
            <p className="card-text"><strong>Inhouse/Wild:</strong> {item["Summary"]['Inhouse/Wild']}</p>
            <p className="card-text"><strong>Categories: </strong>
              {item['Categories']}
            </p>

            <p className="card-text"><strong>Hashtags:</strong> {item.Summary.Tags.join(', ') || 'No Hashtags are there'}</p>
            <Link to={item.Result.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Instagram</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
