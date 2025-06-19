import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './app/app.css'
import { Header } from './app/components/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)
