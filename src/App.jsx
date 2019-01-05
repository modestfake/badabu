import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Playlist from './components/Playlist'
import './App.css'
import logo from './logo.svg'

if (window.location.hostname === 'badabu.netlify.com') {
  ReactGA.initialize('UA-38195480-2')
}
console.log(window.location.hostname, window.location.hostname === 'badabu.netlify.com')

ReactGA.pageview('/')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt='Badabu logo' />
          <h1 className="App-title">Badabu</h1>
        </header>
        <Playlist />
      </div>
    );
  }
}

export default App;
