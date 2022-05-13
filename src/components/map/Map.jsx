import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter"; //57m43

export const Map = ({ event }) => {
 const [viewport, setViewport] = useState({
  latitude: 48.856614,
  longitude: 2.3522219,
  zoom: 8,
 });

 const [eventDetails, setEventDetails] = useState([]);
 useEffect(() => {
  axios
   .get("http://localhost:8000/api/actions/")
   .then((res) => res.data)
   .then((data) => setEventDetails(data));
 }, []);


 // transform event result object into lat & long object
//  const coordinates = eventDetails.map((event) => ({
//   latitude: event.lat,
//   longitude: event.long,
//  }));



 // The latitude and longitude of the center of event coordinates // 59min28
    //  const center = getCenter(coordinates);
    //  console.log("test3", center);

 //

 return (
  <ReactMapGL
   mapStyle="mapbox://styles/guillaumepinot/cl33h6nuv007q14pfv0fefjah"
   mapboxAccessToken="pk.eyJ1IjoiZ3VpbGxhdW1lcGlub3QiLCJhIjoiY2wzM2gzdnR5MDI5aDNka2Iza3hpeTcxNiJ9.npSjAygq-ILwz6Cn3Z5GRw"
   //style={{ width: "fit", height: 900 }}
   {...viewport}
   onMove={(evt) => setViewport(evt.viewport)}
  >
   {eventDetails && eventDetails.map(event => {
       console.log(event);
       return(
          <div key={event.long}>
              <Marker
                  latitude={event.y_coor}
                  longitude={event.x_coor}
                 >
                 <p
                 className="cursor"
                 >🍀</p>
              </Marker>
          </div> 
      )})}
  </ReactMapGL>
 );
};
