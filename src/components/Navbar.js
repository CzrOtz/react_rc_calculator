import React from 'react';
import "../styles/navbar.css";


function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      
      <div className="navbar-links">
        <button onClick={() => setCurrentPage('Welcome')}>Home</button>
        <button onClick={() => setCurrentPage('Info')}>Info</button>
        <button onClick={() => setCurrentPage('Interface')}>Interface</button>
        <button onClick={() => setCurrentPage('Theory')}>Theory</button>
      </div>
    </nav>
  );
}

export default Navbar;

