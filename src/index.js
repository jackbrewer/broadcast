import React from 'react'
import { render } from 'react-snapshot'
import App from './layout/app/App'

render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'))
}
