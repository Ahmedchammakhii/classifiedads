import { Fingerprint } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
const detail = () => {
  const [toogleinfo,setToggle]=useState(false)
  return (
    <div>
     <Navbar/> 
     <div className="details" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
      <div className="de" style={{marginTop:"20px",alignSelf:"center", fontFamily: 'Titillium Web'
}}>
      <img style={{borderRadius:'10px' , width:"600px",height:"auto"}} src='https://demo3.listivotheme.com/wp-content/uploads/2021/11/car-new-1-720x640.jpg'></img>
      <h2>name of ad</h2>
      <h2 style={{color:'grey',marginTop:"0px"}}>price of ad</h2>
      <p>description ..... </p>
      <div style={{display:"flex"}}>
    <h4>vendor details : </h4>
      <IconButton  onClick={(e)=>{setToggle(current=>!current)}} aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
</div>
{toogleinfo && <>
  <h2>name of user : </h2>
  <h2>mobile phone : </h2>
</>
}
      </div>
      </div>
    </div>
  )
}

export default detail
