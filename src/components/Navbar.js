import React from 'react';
import "../styles/navbar.css";


function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <h1>Easy RC Speed Calculator</h1>
      <div className="navbar-links">
        <button onClick={() => setCurrentPage('Welcome')}>Home</button>
        <button onClick={() => setCurrentPage('Info')}>Info</button>
        <button onClick={() => setCurrentPage('Interface')}>Interface</button>
      </div>
    </nav>
  );
}

export default Navbar;

