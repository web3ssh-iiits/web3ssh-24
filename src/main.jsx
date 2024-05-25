import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import RedirectHandler from './utils/RedirectHandler.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: < ErrorPage />
  },
  {
    path: "/*",
    element: < RedirectHandler />,
    errorElement: <ErrorPage />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
