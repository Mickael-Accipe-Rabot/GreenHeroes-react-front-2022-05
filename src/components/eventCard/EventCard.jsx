import React from "react";
import "./eventCard.css";
import { Link } from "react-router-dom";

export const EventCard = ({ event }) => {

  return (
    <div className='eventCard-container'>
      
      <Link className='event-title'to={`/agir/${event.id}`}>
        <h3>{event.title}</h3>
      </Link>
      <div className='event-description'>
      <p className='event-category'>{event.type}</p>
      <p className='event-city'>{event.city}</p>
      </div>
      <Link className='event-time' to={`/agir/${event.id}`}>
      <p >{event.start_date}</p></Link>
      <hr className='list-hr'></hr>
    </div>
  );
};
