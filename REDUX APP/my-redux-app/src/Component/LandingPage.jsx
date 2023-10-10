import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import Todo from './Todo';

import Users from '../features/users/Users';
const LandingPage = () => {
  return (
    <>
    <h1>welcome to landing page</h1>
    <ul>
      <li><Link to={'/'}>Landing-Page</Link></li>
     <li><Link to={'/Users-List'}>Users-List</Link></li>
        <li><Link to={'/Todos-List'}>Todos-List</Link></li>
        
       </ul>
       <div>
        <Outlet/>
       </div>
     
    </>
  );
}



export default LandingPage;