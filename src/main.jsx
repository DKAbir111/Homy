import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <ToastContainer />
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthProvider>
)
