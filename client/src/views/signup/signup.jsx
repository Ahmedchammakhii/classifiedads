import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'
const signup = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className='singup'>
      <div id="card">
        <h2>Register now ! </h2>
        <div className="name" >
        <h3>your username  : </h3>
        <input placeholder='username ..'></input>
        </div>
        <div>
        <h3>your email  : </h3>
        <input type="email" placeholder='email ..'></input>
        </div>
        <div className="password" >
        <h3>your password : </h3>
        <input type="password" placeholder='password ..'></input>
        </div>
        <div className="stillnot">
          <p>you already have an account ? <span><Link style={{listStyle:"none",textDecoration:"none",color:"white"}} to="/signin">singin</Link></span></p>
        </div>
        <div className='submitb'>
          <button id="signinbtn">sign up </button>
        </div>
      </div>



    </div>
    </div>
  </>
  )
}

export default signup
