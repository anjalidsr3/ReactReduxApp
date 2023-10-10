import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ isLoggedIn, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/Login-Page');
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return null;
  }
};


export default AuthGuard;