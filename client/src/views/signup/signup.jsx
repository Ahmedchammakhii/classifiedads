import React, { useState } from 'react'
import "./signup.css"
import { Link, redirect, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'
import axios from 'axios'
const signup = () => {
  const navigate = useNavigate();
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[phone,setPhone]=useState("")
  const addUser = ()=>{
    if (name.length==0 || email.length==0 || password.length==0  || phone.length==0) {alert("please fill all the details"); return ;}
    axios.post("http://127.0.0.1:3000/api/users",{
      name:name ,
      email:email,
      password:password, 
      phone:phone 
    }).then( res=>navigate("/singin")).catch(er=>console.log(er))

  }
  return (
    <>
    <Navbar />
    <div>
    <div className='singup'>
      <div id="card">
        <h2 style={{color:"black" ,textShadow:"0px 0px 0px "}}>Register now ! </h2>
        <div className="name" >
        <h3>your username  : </h3>
        <input onChange={e=>setName(e.target.value)} placeholder='username ..'></input>
        </div>
        <div>
        <h3>your email  : </h3>
        <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='email ..'></input>
        </div>
        <div className="password" >
        <h3>your password : </h3>
        <input onChange={e=>setPassword(e.target.value)} type="password" placeholder='password ..'></input>
        </div>
        <div className="phone" >
        <h3>your phone number : </h3>
        <input onChange={e=>setPhone(e.target.value)}  placeholder='phone ..'></input>
        </div>
        <div className="stillnot">
          <p>you already have an account ? <span><Link style={{listStyle:"none",textDecoration:"none",color:"orange"}} to="/singin">singin</Link></span></p>
        </div>
        <div className='submitb'>
          <button onClick ={e=>addUser()} id="signinbtn">sign up </button>
        </div>
      </div>



    </div>
    </div>
  </>
  )
}

export default signup
