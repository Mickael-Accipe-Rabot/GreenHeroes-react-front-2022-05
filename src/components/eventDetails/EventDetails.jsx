import React from 'react';
import './eventDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../navbar/Navbar';

export const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/actions/' + id)
      .then((res) => res.data)
      .then((data) => setEventDetails(data));
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="eventDetails-container">
        <div className="details-map">map</div>

        <div className="details-items">

          <div className="details-top">
            <h1>{eventDetails.title}</h1>
            </div>
            <div className='details-top-info'>
            <p>{eventDetails.type}</p>
            <p>crée par {eventDetails.author}</p>
            
            
          </div>
          <hr></hr>
          <div className="details-bottom">
          
            <p>{eventDetails.start_date}</p>
            <p>{eventDetails.start_hour}</p>
            
            <p>{eventDetails.street_number} {eventDetails.street_name}</p>
            
            <p>{eventDetails.city}, {eventDetails.zip_code}, {eventDetails.country}</p>
 
            
            <hr></hr>
            <p>description: </p>
            <p>{eventDetails.description}</p>
            {/* <p>{eventDetails.x_coor}</p>
            <p>{eventDetails.y_coor}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
