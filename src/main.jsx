import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tourist page/config/translate/i18n.js'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Countries from './countries page/details.jsx'
import TouristHelp from './tourist page/toursitHelp.jsx'
import Sign from './mainPage/signUp&In/sign.jsx'
const router=createBrowserRouter([
  {
      path: '/',
      element: <App />,
  },
  {
    path:'/countries',
    element:<Countries />
  },
  {
    path:'/touristHelp',
    element:<TouristHelp />
  },
  {
    path:'/sign up',
    element:<Sign />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
