import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form action="">
        <input type="text" name="" id="" placeholder="username" />
        <input type="password" name="" id="" placeholder="password" />
        <button type="submit">Login</button>
        <p>Oups ! an error occured</p>
        <span>
          Don't you have an account? <Link to='/register'>Register</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
