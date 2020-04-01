import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Playlist from './components/Playlist'
import './App.css'
import logo from './logo.svg'

const isNetlify = /badabu.netlify.(com|app)/.test(window.location.hostname)

if (isNetlify) {
  ReactGA.initialize('UA-38195480-2')
}

console.log('You haven\'t seen anything 🕵️', {
  hostname: window.location.hostname,
  isNetlify
})

ReactGA.pageview('/')

export default class App extends Component {
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
