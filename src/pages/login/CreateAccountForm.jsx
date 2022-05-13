import axios from "axios";
import { useState } from "react";

export const CreateAccountForm = ({ isVisible, toggleVisible }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fonction");

//     | id            | int          | NO   | PRI | NULL    | auto_increment |
// | first_name    | varchar(100) | YES  |     | NULL    |                |
// | last_name     | varchar(100) | YES  |     | NULL    |                |
// | email         | varchar(100) | YES  | UNI | NULL    |                |
// | password      | varchar(100) | YES  |     | NULL    |                |
// | list_imageUrl | varchar(255) | YES  |     | NULL    |                |
// | street_number | varchar(100) | YES  |     | NULL    |                |
// | street_name   | varchar(255) | YES  |     | NULL    |                |
// | zip_code      | int          | YES  |     | NULL    |                |
// | city          | varchar(255) | YES  |     | NULL    |                |

    const data = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      list_imageUrl: picture,
      street_number: streetNumber,
      street_name: streetName,
      zip_code: zipCode,
      city: city,
      country: "France"
    };

    console.log(data);

    axios
      .post("/api/users", data, {withCredentials: true})
      .then ((res)=>{
        console.log(res.data)
        window.location = '/';})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isVisible && (
        <div className="">
          <div
            className="" >
            <div className="">
              Become a Green Hero now
              <br />-<br />
              Create your account
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Firstname"
                type="text"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="" />

              <input
                placeholder="Lastname"
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="" />

              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="" />

              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="" />

              <input
                placeholder="Picture"
                type="text"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
                className="" />

              <input
                placeholder="Street Number"
                type="text"
                required
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
                className="" />

              <input
                placeholder="Street Name"
                type="text"
                required
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
                className="" />

              <input
                placeholder="Zip Code"
                type="text"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="" />

              <input
                placeholder="City"
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="" />

              <button
                onClick={handleSubmit}
                className=" ">
                Create
                </button>
              </form>
          </div>
        </div>
      )}
    </div>
  );
};