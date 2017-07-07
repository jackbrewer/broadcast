import React from 'react'
import { render } from 'react-snapshot'
import Layout from './structure/layout/Layout'

render(<Layout />, document.getElementById('root'))

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'))
}
