import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Authproviders from './providers/Authproviders'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-6xl mx-auto'>
   <Authproviders><RouterProvider router={router}></RouterProvider></Authproviders>
   </div>
  </React.StrictMode>,
)
