import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">AB Blog</div>
        <div className="links">
          <Link className="link" to="/?cat=posts">
            Posts
          </Link>
          <Link className="link" to="/?cat=videos">
            Videos
          </Link>
          <span>Abdellah</span>
          <span>Logout</span>
          <span>
            <Link className='writeBtn' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar
