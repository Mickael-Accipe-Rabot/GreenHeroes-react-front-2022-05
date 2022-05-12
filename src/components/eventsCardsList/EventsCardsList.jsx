import React from 'react';
import './eventsCardsList.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EventCard } from '../eventCard/EventCard';

export const EventsCardsList = () => {
  const [eventDetails, setEventDetails] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/actions/')
      .then((res) => res.data)
      .then((data) => setEventDetails(data));
  }, [id]);

  return (
    <div>
      <h1>Evènements</h1>

      <div>
        {eventDetails.map((event, index) => (
          <div key={index}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
