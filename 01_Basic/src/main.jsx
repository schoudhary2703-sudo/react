import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Sandeep from './sandeep.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App/>
    <Sandeep/>
    </>
  </StrictMode>,
)
