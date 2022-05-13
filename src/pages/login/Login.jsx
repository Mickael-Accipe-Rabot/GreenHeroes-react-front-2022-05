import { useState } from "react";
import { CreateAccountForm } from "./CreateAccountForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

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
    <div className="login">
      <div className="login_form" >
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign in</h1>
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

          <div>
            <input className="a-green-btn"
              type="submit"
              value="Log In"
              />
           
          </div>
            <div className="or_sign_up">
              or create your account{""}
              <span
                onClick={toggleVisible}
              >
                <span className="here">here</span>
              </span>
            </div>
            <CreateAccountForm
              isVisible={isVisible}
              toggleVisible={toggleVisible}
            />
            </form>
          </div> 

      </div>
  );
};