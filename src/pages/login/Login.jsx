import { useState } from "react";
import { CreateAccountForm } from "./CreateAccountForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
  
    console.log(data);

    axios
      .post("/api/auth", data, {withCredentials: true})
      .then ((res)=>{
        if (res.data === "reject") {
          navigate('/wronglogin');}
        else if (res.data !== "reject") {
          navigate('/');
        }})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="" >
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="email"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="" />

          <input
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="" />

          <div className="">
            <input 
              type="submit"
              value="Log In"
              className="" />
           
            </div>
            </form>

            <div className="">
              or create your account{""}
              <span
                className=""
                onClick={toggleVisible}
              >
                here
              </span>
            </div>
            <CreateAccountForm
              isVisible={isVisible}
              toggleVisible={toggleVisible}
            />
          </div> 
      </div>
  );
};