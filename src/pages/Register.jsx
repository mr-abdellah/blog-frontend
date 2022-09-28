import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-page">
      <h1>Register</h1>
      <form action="">
        <input type="text" placeholder="email" required />
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <button type="submit">Login</button>
        <p>Oups ! an error occured</p>
        <span>
          Don't you have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Register;
