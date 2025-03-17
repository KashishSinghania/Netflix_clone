import "./Login.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    
    if (email && password) {
      navigate("/home");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="login">
      <div className="Ttop">
        <div className="Wwrapper">
          <img
            className="bglogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </div>
      </div>
      <div className="Tcontainer">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or Phone Number"
            ref={emailRef}
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <button className="log" type="submit">
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.              
          </small>  
        </form> 
      </div>
    </div>
  );
}
//add link to learn more. add some google captcha
// for email we can use regex to match a valid pattern.