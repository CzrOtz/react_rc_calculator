import React from 'react';
import '../styles/welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
        <div><strong>Home</strong></div>
      <h2>Welcome to the RC Car Speed Calculator</h2>
      <p>This application helps you calculate the speed of your RC car based on various parameters.</p>
      <ul>
        
        <li><strong>Info:</strong> Information about the parameters to enter</li>
        <li><strong>Interface:</strong> Get calculations about your build</li>
        <li><strong>Theory:</strong> Theory on electric motors</li>
      </ul>
    </div>
  );
}

export default Welcome;


