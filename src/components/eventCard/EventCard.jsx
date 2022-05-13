import React from "react";
import "./eventCard.css";
import { Link } from "react-router-dom";

export const EventCard = ({ event }) => {
  console.log(event);
 return (
  <div>
   <Link to={`/agir/${event.id}`}>
    <h3>{event.title}</h3>
   </Link>
   <h3>{event.author}</h3>
   <h3>{event.start_date}</h3>
   <h3>{event.start_hour}</h3>
   <h3>{event.zip_code} {event.city}</h3>
  </div>
 );
};
