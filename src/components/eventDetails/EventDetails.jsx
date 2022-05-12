import React from 'react'
import './eventDetails.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Navbar } from '../navbar/Navbar';

export const EventDetails = () => {

    const [eventDetails, setEventDetails] = useState({});

    let { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/actions/" + id)
            .then(res => res.data)
            .then(data => setEventDetails(data));
    }, [id]);


  return (
    <div className='eventDetails-container'>
        <Navbar/>
        <div>
            <h1>{eventDetails.title}</h1>
            <p>{eventDetails.description}</p>
            <p>{eventDetails.type}</p>
            <p>{eventDetails.author}</p>
            <p>{eventDetails.start_date}</p>
            <p>{eventDetails.start_hour}</p>
            <p>{eventDetails.x_coor}</p>
            <p>{eventDetails.y_coor}</p>
            <p>{eventDetails.street_number}</p>
            <p>{eventDetails.street_name}</p>
            <p>{eventDetails.city}</p>
            <p>{eventDetails.zip_code}</p>
            <p>{eventDetails.country}</p>

        </div>



    </div>
  )
}
