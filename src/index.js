import React from 'react';
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import '@atlaskit/css-reset'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

if (window.location.hostname === 'badabu.netlify.com') {
  ReactGA.initialize('UA-38195480-2')
}

ReactGA.pageview('/')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
