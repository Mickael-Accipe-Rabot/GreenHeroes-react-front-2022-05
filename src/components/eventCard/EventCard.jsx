import React from 'react';
import './eventCard.css';
import { Link } from 'react-router-dom';
export const EventCard = ({ event }) => {
  return (
    <div>
      <Link to={`/users/${event.id}`}>
        <h3>{event.title}</h3>
      </Link>
      <h3>{event.city}</h3>
    </div>
  );
};
