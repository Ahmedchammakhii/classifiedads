import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signin.css"
import Navbar from '../../components/navbar/navbar.jsx'
import axios from 'axios'
const signin = (props) => {
  const navigate = useNavigate();
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const checkuser = ()=>{
    if (name.length==0 ||  password.length==0  ) {alert("please fill all the details"); return ;}
    axios.get("http://127.0.0.1:3000/api/users",{
    }).then( res=>{
      var i = 0 ;
       for ( const user of res.data) {
        if (user.name == name || user.email===name) {
          if (user.password===password) {props.setConnected(true) ; props.setUser(user) ; navigate("/") ; return}
          else {
            alert("wrong password")
            return ;
          }
        }
        i++
      }
      if (i>=res.data.length) {alert("user not found ! check your credentials ") ; return ; }
      
    }).catch(er=>console.log(er))

  }
  return (
    <>
    <Navbar/>
    <div className='signin'>
      <div className="card">
        <h2>Welcome Back ! </h2>
        <div className="name" >
        <h3>your username or email : </h3>
        <input onChange={e=>setName(e.target.value)} placeholder='username ..'></input>
        </div>
        <div className="password" >
        <h3>your password : </h3>
        <input onChange={e=>setPassword(e.target.value)}  type="password" placeholder='password ..'></input>
        </div>
        <div className="stillnot">
          <p>still dont have an account ? <span><Link style={{listStyle:"none",textDecoration:"none",color:"white"}} to="/register">register</Link></span></p>
        </div>
        <div className='submitb'>
          <button onClick ={e=>checkuser()} id="signinbtn">sign in </button>
        </div>
        
      </div>

    </div>
    </>
  )
}

export default signin
