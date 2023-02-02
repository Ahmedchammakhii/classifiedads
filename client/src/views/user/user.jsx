import { Avatar } from '@mui/material'
import { orange } from '@mui/material/colors'
import { padding } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'
const user = () => {
  const path = useLocation().pathname.split("/")
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[phone,setPhone]=useState("")

  useEffect((()=>{
   axios.get(`http://127.0.0.1:3000/api/users/one/${path[path.length-1]}` ).then(res=>setUser(res.data[0])) 
  }),[])
  const [user,setUser]=useState({})
  
  const navigate = useNavigate();
  const updateUser= ()=> {
    if (name.length==0) setName(user.name)
    if (password.length==0) setPassword(user.password)
    if (phone.length==0) setPhone(user.phone)
    axios.put(`http://127.0.0.1:3000/api/users/${user.idusers}`,{name:name,password:password,email:user.email,phone:user.phone}).then(res=>navigate(`/`))
  }
  return (
    <div>
      <Navbar/>
      <div className="avatar" style={{width:"100%",display:"flex"}}>
                <Avatar sx={{ width:"250px" , height:"250px",bgcolor: orange["500"],margin:"100px",fontSize:"40px" }}>{user.name}</Avatar>
    <div className="inputs" style={{width:"100%",margin:"100px"}}>
    <h3>want to update your informations ? </h3>
    <input onChange={e=>setName(e.target.value)} placeholder='name' defaultValue={user.name} ></input>
    <input placeholder="email" defaultValue={user.email} disabled  ></input>
    <input onChange={e=>setPassword(e.target.value)} type='password' placeholder='new password' defaultValue={user.password}></input>
    <input onChange={e=>setPhone(e.target.value)}  placeholder='phone ' defaultValue={user.phone}></input>
    <button onClick={e=>updateUser()} style={{background:"orange",width:"100px",height:"50px"}}>update</button>
    </div>
     </div>
    </div>
  )
}

export default user
