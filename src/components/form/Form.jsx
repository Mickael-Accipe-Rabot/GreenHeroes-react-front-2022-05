import React from "react";
import "./form.css";
import axios from "axios";
import { useState } from "react";

const Form = () => {
 const [firstname, setFirstname] = useState("");
 const [lastname, setLastname] = useState("");
 const [title, setTitle] = useState("");
 const [family, setFamily] = useState("");
 const [picture, setPicture] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
   first_name: firstname,
   last_name: lastname,
   full_name: `${firstname} ${lastname}`,
   title: title,
   family: family,
   list_imageUrl: picture,
   email: email,
   password: password,
  };

  axios
   .post("/api/users", data)
   .then((res) => {
    console.log(res.data);
    window.location = "/";
   })
   .catch((err) => console.log(err));
 };

 return (
  <div>
   {isVisible && (
    <div className="">
     <div
      className=""
     >
      <div className="">
       Ajouter un Eco Event !
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
       <input
        placeholder="Firstname"
        type="text"
        required
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        className=""
       />

       <input
        placeholder="Lastname"
        type="text"
        required
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        className=""
       />

       <input
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=""
       />

       <input
        placeholder="Family"
        type="text"
        value={family}
        onChange={(e) => setFamily(e.target.value)}
        className=""
       />

       <input
        placeholder="Picture"
        type="text"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
        className=""
       />

       <input
        placeholder="Email"
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=""
       />

       <input
        placeholder="Password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=""
       />

       <button
        onClick={handleSubmit}
        className=""
       >
        Create
       </button>
      </form>
     </div>
    </div>
   )}
  </div>
 );
};

export default Form;
