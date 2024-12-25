import React from 'react'
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <div className="mt-5">
      login page
      <div>
        <button type="button" onClick={()=>{
          dispatch(login({name: 'testReduxToolkit'}))
          navigate("/")
        }} className="btn btn-primary btn-sm mt-3">Login</button>
      </div>
    </div>
  )
}

export default Login