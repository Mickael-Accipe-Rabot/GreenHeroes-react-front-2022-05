import React from "react";
import "./form.css";
import axios from "axios";
import { useState } from "react";

export const Form = () => {
 const [eventName, setEventName] = useState("");
 const [organisator, setOrganisator] = useState("");
 const [date, setDate] = useState("");
 const [hour, setHour] = useState("");
 const [action, setAction] = useState("");
 const [number, setNumber] = useState("");
 const [adress, setAdress] = useState("");
 const [zip, setZip] = useState("");
 const [city, setCity] = useState("");
 const [description, setDescription] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
   title: eventName,
   author: organisator,
   start_date: date,
   start_hour: hour,
   type: action,
   street_number: number,
   street_name: adress,
   zip_code: zip,
   city: city,
   country: "France",
   description: description,
  };

  console.log(data);

  axios
   .post("http://localhost:8000/api/actions", data)
   .then((res) => {
    console.log(res.data);
    window.location = "/";
   })
   .catch((err) => console.log(err));
 };

 return (
    <div className="event">
     <div className="">Ajouter un Eco Event !</div>
     <form onSubmit={(e) => handleSubmit(e)} className="form">
      <input
       placeholder="Nom de l'événement"
       type="text"
       required
       value={eventName}
       onChange={(e) => setEventName(e.target.value)}
       className=""
      />

      <input
       placeholder="Organisateur"
       type="text"
       required
       value={organisator}
       onChange={(e) => setOrganisator(e.target.value)}
       className=""
      />

      <select
       placeholder="Type d'action"
       type="text"
       required
       value={action}
       onChange={(e) => setAction(e.target.value)}
       className=""
      >
       <option value="Ecoaction">Type d'Eco Event</option>
       <option value="Dépollution">Dépollution</option>
       <option value="Nettoyage">Nettoyage</option>
       <option value="Réparation">Réparation</option>
       <option value="Recyclage">Recyclage</option>
       <option value="Collecte">Collecte</option>
       <option value="Don">Don</option>
      </select>

      <input
       placeholder="date"
       type="date"
       required
       value={date}
       onChange={(e) => setDate(e.target.value)}
       className=""
      />

      <input
       placeholder="Heure de l'évènement"
       type="time"
       required
       value={hour}
       onChange={(e) => setHour(e.target.value)}
       className=""
      />

      <input
       placeholder="Numéro de rue"
       type="text"
       required
       value={number}
       onChange={(e) => setNumber(e.target.value)}
       className=""
      />

      <input
       placeholder="Nom de rue"
       type="text"
       required
       value={adress}
       onChange={(e) => setAdress(e.target.value)}
       className=""
      />

      <input
       placeholder="Code postal"
       type="text"
       required
       value={zip}
       onChange={(e) => setZip(e.target.value)}
       className=""
      />

      <input
       placeholder="Ville"
       type="text"
       required
       value={city}
       onChange={(e) => setCity(e.target.value)}
       className=""
      />

      <textarea
       placeholder="Message"
       type="textarea"
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       className=""
      />

      <button onClick={handleSubmit} className="">
       Create
      </button>
     </form>
    </div>
 );
};
