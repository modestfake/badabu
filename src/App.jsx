import React, { Component } from 'react';
import Playlist from './components/Playlist'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='badabu-logo-192.png' alt='Badabu logo' />
          <h1 className="App-title">Badabu</h1>
        </header>
        <Playlist />
      </div>
    );
  }
}

export default App;
