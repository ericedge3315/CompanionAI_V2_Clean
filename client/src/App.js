// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';

function App() {
  useEffect(() => {
    fetch('/')
      .then(response => response.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Companion AI Chat with Andrew Tate</h1>
      </header>
      <Chat />
    </div>
  );
}

export default App;
