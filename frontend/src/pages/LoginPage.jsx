import React, { useEffect } from 'react'
import Login from '../components/Login/Login.jsx'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated} = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated){
      navigate("/")
    }
  }, [])
  
  return (
    <div className='w-full h-screen'>
      <Login />
    </div>
  )
}

export default LoginPage
