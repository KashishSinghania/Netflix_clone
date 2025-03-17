import { useRef, useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault(); 
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault(); 
    setPassword(passwordRef.current.value);

  
    if (passwordRef.current.value) {
      navigate("/login"); 
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="bglogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="Lcontainer">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <form className="input" onSubmit={handleStart}>
            <input type="email" placeholder="email address" ref={emailRef} required />
            <button className="registerButton" type="submit">
              Get Started
            </button>
          </form>
        ) : (
          <form className="input" onSubmit={handleFinish}>
            <input type="password" placeholder="password" ref={passwordRef} required />
            <button className="registerButton" type="submit">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
//make sign in button functional by linking it to/login.