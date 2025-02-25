import React from 'react';
import './App.css';
import logo from './assets/logo.svg'; // Ensure logo path is correct

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <h1 className="headline">
        Coming Soon: Game-Changing Mobile App
      </h1>
    </div>
  );
}

export default App;
