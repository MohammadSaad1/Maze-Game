import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as MazeService from './api/services/MazeService'

function App() {

  MazeService.create({mazePlayerName: 'ponies', mazeHeight: 20, mazeWidth: 20, difficulty: 6}).then(console.log).catch(console.log)

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
