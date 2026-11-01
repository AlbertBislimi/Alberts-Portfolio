import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LangProvider } from './i18n/LangContext'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const app = <React.StrictMode><LangProvider><App /></LangProvider></React.StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
