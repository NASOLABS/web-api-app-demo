import React from 'react';
import logo from './logo.svg';
import './App.css';
import Health from './components/Health';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Health/>
      </header>
    </div>
  );
}

export default App;
