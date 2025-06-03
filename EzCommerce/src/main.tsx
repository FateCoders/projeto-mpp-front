import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CategoryProvider } from './contexts/CategoryContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CategoryProvider>
        <App />
    </CategoryProvider>
  </StrictMode>
)
