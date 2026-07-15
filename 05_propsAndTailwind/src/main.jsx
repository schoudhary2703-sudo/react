import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card10 from './components/card.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card10 username="sandeep" number='400'/>
    
    <Card10 username="goofy" number='3456'/>
  </StrictMode>,
)
