import React, { useEffect } from 'react'
import { useNavigate } from "react-router"; 
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice';
import { fetchPosts } from '../redux/postSlice';

function Home(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const userPost = useSelector((state) => state.userPost);

  return (
    <div className="mt-5"> 
      <h1>Hello, {props.name}!</h1> 
      home
      <div>
        <button type="button" 
          onClick={()=>{
            dispatch(logout())
            navigate("/login")}
          } 
          className="btn btn-primary btn-sm mt-3">Logout</button>
      </div>
    </div>
  )
}

export default Home