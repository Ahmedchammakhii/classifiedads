import { Fingerprint } from '@mui/icons-material'
import { IconButton , Button} from '@mui/material'
import axios from 'axios'
import React, { useEffect} from 'react'
import {useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'

const detail = (props) => {
  const loc = useLocation().pathname.split("/")
   const [toogleinfo,setToggle]=useState(false)
  const navigate = useNavigate()
   const [ad,setAd]=useState({})
   useEffect(()=>{ 
   axios.get(`http://127.0.0.1:3000/api/ads/${loc[loc.length-1]}`).then(res=>setAd(res.data[0]))
   },[])
   const deleteitem = ()=> {
    axios.delete(`http://127.0.0.1:3000/api/ads/${loc[loc.length-1]}`).then(res=>navigate("/ads"))
  }
   
  return (
    <div>
      
   {/* <List connected={props.connected} /> */}
   {ad.length!==0 &&<>
   
     <Navbar user = {props.user} connected={props.connected} /> 
     <div className="details" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
      <div className="de" style={{marginTop:"20px",alignSelf:"center", fontFamily: 'Titillium Web'
}}>
      <img style={{borderRadius:'10px' , width:"600px",height:"auto"}} src={ad.imageurl}></img>
      <h2>{ad.name}</h2>
      <h2 style={{color:'grey',marginTop:"0px"}}>price : <span style={{color:"red"}}>{ad.price} DT</span></h2>
      <p>{ad.description}</p>
      <div style={{display:"flex"}}>
    <h4>vendor details : </h4>
      <IconButton  onClick={(e)=>{setToggle(current=>!current)}} aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
</div>
{toogleinfo && <>
  <h2>author name : {ad.author} </h2>
  <h2>mobile phone : {ad.phone} </h2>
</>
}
{ (props.user && props.user.idusers===ad.authorId) && 
<div>
  <Button style={{color:"red"}} onClick={e=>deleteitem()} >delete</Button>

  </div>
}
      </div>
      </div>
      </>
      }
    </div>
  )
}

export default detail
