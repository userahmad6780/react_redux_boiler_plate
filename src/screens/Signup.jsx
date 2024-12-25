import React from 'react'
import { useNavigate } from "react-router";

function Signup() {
  let navigate = useNavigate();

  return (
    <div className="mt-5">
      Signup page
      <div>
        <button type="button" onClick={()=>navigate("/")} className="btn btn-primary btn-sm mt-3">Signup</button>
      </div>
    </div>
  )
}

export default Signup