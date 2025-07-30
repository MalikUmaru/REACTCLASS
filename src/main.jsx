import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MealsProvider from './Components/Providers/MealsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MealsProvider>
    <App />
    </MealsProvider>
  </StrictMode>,
)
