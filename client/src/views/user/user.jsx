import { Avatar } from '@mui/material'
import { orange } from '@mui/material/colors'
import { padding } from '@mui/system'
import React from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
const user = () => {
  return (
    <div>
      <Navbar/>
      <div className="avatar" style={{width:"100%",display:"flex"}}>
                <Avatar sx={{ width:"250px" , height:"250px",bgcolor: orange["500"],margin:"100px",fontSize:"40px" }}>N</Avatar>
    <div className="inputs" style={{width:"100%",margin:"100px"}}>
    <h3>want to update your informations ? </h3>
    <input placeholder='name' ></input>
    <input defaultValue="email" disabled ></input>
    <input placeholder='new password'></input>
    <button style={{background:"orange",width:"100px",height:"50px"}}>update</button>
    </div>
     </div>
    </div>
  )
}

export default user
