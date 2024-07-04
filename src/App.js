import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Info from './components/Info';
import Interface from './components/Interface';
import Theory from './components/Theory';

function App() {
  const [currentPage, setCurrentPage] = useState('Welcome');

  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome />;
      case 'Info':
        return <Info />;
      case 'Interface':
        return <Interface />;
      case 'Theory':
        return <Theory />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;




