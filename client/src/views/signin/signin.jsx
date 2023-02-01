import React from 'react'
import { Link } from 'react-router-dom'
import "./signin.css"
import Navbar from '../../components/navbar/navbar.jsx'
const signin = () => {
  return (
    <>
    <Navbar/>
    <div className='signin'>
      <div className="card">
        <h2>Welcome Back ! </h2>
        <div className="name" >
        <h3>your username or email : </h3>
        <input placeholder='username ..'></input>
        </div>
        <div className="password" >
        <h3>your password : </h3>
        <input  type="password" placeholder='password ..'></input>
        </div>
        <div className="stillnot">
          <p>still dont have an account ? <span><Link style={{listStyle:"none",textDecoration:"none",color:"white"}} to="/register">register</Link></span></p>
        </div>
        <div className='submitb'>
          <button id="signinbtn">sign in </button>
        </div>
        
      </div>

    </div>
    </>
  )
}

export default signin
