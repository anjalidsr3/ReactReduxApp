import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/Store.js'
import { Provider } from 'react-redux'
import Todo from './Component/Todo'
import LoginPage from './Component/LoginPage'

import {
  createBrowserRouter,
  RouterProvider,
  
  
} from "react-router-dom";
import LandingPage from'./Component/LandingPage';
// import HomePage from './Component/HomePage.jsx'
import Users from './features/users/Users.jsx'
import AuthGuard from './Component/AuthGuard.jsx'
const isLoggedIn = false; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  
  children:[
      {
        path:"/Users-List",
        element:<Users/>,
      },  
  {
    path: "/Todos-List",
    element: <Todo/>,
  },
  
    ]
  },
   {
    path: "/Login-Page",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
     <RouterProvider router={router} />
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
);
