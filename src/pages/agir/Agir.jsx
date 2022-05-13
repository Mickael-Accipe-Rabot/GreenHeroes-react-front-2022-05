import React from "react";
import { EventsCardsList } from "../../components/eventsCardsList/EventsCardsList";
import { Navbar } from "../../components/navbar/Navbar";
import { Map } from "../../components/map/Map";
import "./agir.css";

export const Agir = () => {
 return (
  <div className="body">
   <Navbar />
   <div className="box">
    <div className="eventlist">
     <EventsCardsList />
    </div>
    <div className="map">
      <Map />
    </div>
   </div>
  </div>
 );
};
