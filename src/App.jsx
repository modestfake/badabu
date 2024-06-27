import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Playlist from './components/Playlist'
import './App.css'
import logo from './logo.svg'

const isNetlify = /badabu.netlify.(com|app)/.test(window.location.hostname)

if (isNetlify) {
  ReactGA.initialize('UA-38195480-2')
  ReactGA.pageview('/')
}

console.log("You haven't seen anything 🕵️", {
  hostname: window.location.hostname,
  isNetlify,
})

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img alt='Badabu logo' src={logo} />
          <h1 className='App-title'>Badabu</h1>
        </header>
        <Playlist />
        <footer>
          <a
            className='request-sound'
            href='https://github.com/modestfake/badabu/issues/new'
            rel='noopener noreferrer'
            target='_blank'
          >
            Request a sound
          </a>
        </footer>
      </div>
    )
  }
}
