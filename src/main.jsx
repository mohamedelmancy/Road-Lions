import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n/config'
import './index.css'
import './rtl.css'

// Set initial language and direction
const savedLanguage = localStorage.getItem('language') || 'en'
document.documentElement.lang = savedLanguage
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

