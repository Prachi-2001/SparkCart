import React, { useEffect } from 'react'
import SignUp from "../components/SignUp/SignUp"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated} = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated){
      navigate("/")
    }
  }, [])
  
  return (
    <div>
      <SignUp/>
    </div>
  )
}

export default SignUpPage
