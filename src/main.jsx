import React from 'react'
import ReactDOM from 'react-dom/client'
import { LangProvider } from './i18n/LangContext'
import { ThemeProvider } from './theme/ThemeContext'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
