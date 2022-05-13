import axios from "axios";
import { useState } from "react";

export const CreateAccountForm = ({ isVisible, toggleVisible }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [family, setFamily] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fonction");

    const data = {
      first_name: firstname,
      last_name: lastname,
      full_name: `${firstname} ${lastname}`,
      list_imageUrl: picture,
      email: email,
      password: password,
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
              Connect with Westeros now
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
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="" />

              <input
                placeholder="Family"
                type="text"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
                className="" />

              <input
                placeholder="Picture"
                type="text"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
                className="" />

              <input
                placeholder="Email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="" />

              <input
                placeholder="Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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