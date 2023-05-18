import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Authproviders from './providers/Authproviders'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authproviders><RouterProvider router={router}></RouterProvider></Authproviders>
  </React.StrictMode>,
)
