import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'
import "./add.css"
const add = (props) => {
  const navigate = useNavigate();
  const[name,setName]=useState("")
  const[description,setDescription]=useState("")
  const[imageurl,setimage]=useState("")
  const[price,setprice]=useState("")
  const[categories,setcat]=useState([])
  useEffect(()=>{
      !props.connected && navigate("/singin")
      axios.get("http://127.0.0.1:3000/api/ads/cat").then (res=>{setcat(res.data.map(el=>el.name))})

    }
  ,[])
  const naviagte=useNavigate()
  const addAd =() => {
const categoryId= document.getElementById("cat-select").selectedIndex ;
axios.post("http://127.0.0.1:3000/api/ads",{
name:name,
description:description ,
image:imageurl,
author:props.user.idusers,
price:price,
category:categoryId

}).then(res=>naviagte("/ads")).catch(err=>console.log(err))


  }
  return (
    <div className='add'>
      
      <Navbar user = {props.user} connected={props.connected}/>
      <div id="card">
        <h2 style={{color:"black",textShadow:"0px 0px 0px "}}>Post an ad :  </h2>
        <div className="postname" >
        <h3>item name  : </h3>
        <input required onChange={e=>setName (e.target.value)} placeholder='item name'></input>
        </div>
        <div>
        <h3>item description  : </h3>
        <input required onChange={e=>setDescription (e.target.value)} type="textarea" placeholder='description ..'></input>
        </div>
        <div>
        <h3>item imgurl  : </h3>
        <input required onChange={e=>setimage (e.target.value)} type="textarea" placeholder='description ..'></input>
        </div>
        <div className="item price" >
        <h3>price: </h3>
        <input required onChange={e=>setprice (e.target.value)}  placeholder='price ..'></input>
        </div>
        <div className='items'>
        <select name="categ" id="cat-select">
    <option value="">--Please choose a category--</option>
    {categories.map(categ=><option value="">{categ}</option>)}
    </select>
    </div>
        <div className='submitb' >
          <button onClick={e=>addAd()} id="signinbtn" style={{borderRadius:"5px"}}>post the ad </button>
        </div>
    </div>
    
    </div>
  )
}

export default add
