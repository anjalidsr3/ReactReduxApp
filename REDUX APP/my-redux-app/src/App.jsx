import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { Link,Outlet } from 'react-router-dom';
// import Todo from './Component/Todo'

// import Users from './features/users/Users'
import LandingPage from './Component/LandingPage'
// import HomePage from './Component/HomePage'





function App(){
 
  return (
    <>
    {/* <h1>Welcome to Home</h1>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
     <li><Link to={'/Users-List'}>Users-List</Link></li>
        <li><Link to={'/Todos-List'}>Todos-List</Link></li>
        <li><Link to={'/Landing-Page'}>Landing-Page</Link></li>
       </ul>
       <div>
        <Outlet/>
       </div> */}
       
    <LandingPage/>
    
    </>
  );
};

export default App;
