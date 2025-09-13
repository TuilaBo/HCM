import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import HoChiMinh_II from './components/HoChiMinh_II.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HoChiMinh_II />
  </StrictMode>,
)
