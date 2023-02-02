import { Avatar } from '@mui/material'
import { blue, blueGrey, orange } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const navbar = (props) => {
  return (
    <div className='navbar'>
      <div className="logo">
      <Link style={{color:"#374b5c" , marginRight:"20px",listStyle:"none",textDecoration:"none"}} to="/" ><img id='logo' src="https://pngimg.com/d/waze_PNG6.png" alt="logo" /></Link> 
      </div>
    <div className="links">
      <Link style={{color:"#374b5c" , marginRight:"20px",listStyle:"none",textDecoration:"none"}} to="/" >Home</Link>
      <Link style={{color:"#374b5c",marginRight:"20px",listStyle:"none",textDecoration:"none"}} to="/ads" >Search</Link>
      </div>
      {!props.connected ?
      <div className="signup-in" >
      <i class="material-symbols-outlined" style={{"marginRight":"10px"}}>login</i>
      <button id="borderright" ><Link style={{color:"#374b5c" , marginRight:"20px",listStyle:"none",textDecoration:"none"}} to="/singin" >login</Link></button>
      <button ><Link style={{color:"#374b5c" , marginRight:"20px",listStyle:"none",textDecoration:"none"}} to="/register" >Register</Link></button>
     
      </div> :
      <div className='profil' style={{display:"flex"}}>

    <Avatar sx={{ width:"40px" , height:"40px",bgcolor: blueGrey["900"],fontSize:"20px" }}>{props.user.name[0]}</Avatar>
   
      <button ><Link style={{color:"#374b5c" , marginRight:"20px",listStyle:"none",textDecoration:"none"}} to={`/user/${props.user.idusers}`} >Profile</Link></button>
      </div>
      }
      <div>
      <button className='postbtn'id='btn' onMouseOver={(e)=>{const d =  document.getElementById("btn") ;d.classList.add("jello-horizontal")}}><Link to="/addAd "style={{listStyle:"none",textDecoration:"none" , color:"white"}}> Post your ad</Link> </button>
      </div>
     
    </div>
  )
}

export default navbar
