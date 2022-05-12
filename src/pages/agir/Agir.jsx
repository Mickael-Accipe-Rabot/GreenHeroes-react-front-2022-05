import React from 'react';
import { EventsCardsList } from '../../components/eventsCardsList/EventsCardsList';
import { Navbar } from '../../components/navbar/Navbar';

import './agir.css';

export const Agir = () => {
  return (
    <div>
      <Navbar />
      <div>
        <EventsCardsList />
      </div>
    </div>
  );
};
