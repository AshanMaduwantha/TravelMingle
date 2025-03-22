import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <div className="unique-navbar">
      <div className="unique-nav-container">
        <span className="unique-logo">Travel Mingle</span>
        <div className="unique-nav-items">
          <button className="unique-nav-button">Register</button>
          <button className="unique-nav-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
