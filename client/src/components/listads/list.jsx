import axios from 'axios'
import React, { useState } from 'react'
import ListoneAd from './listoneAd.jsx'
const list = (props) => {
  const [ads,setads]=useState([])
  useState(()=>{
    
    axios.get("http://127.0.0.1:3000/api/ads").then(res=>{
    setads(res.data)
    })
  })
  return (
    <div style={{display:"flex", flexWrap: "wrap",width:"100%"}}>
    { ads.length!==0 && 
      props.CatSelected===0 ?  ads.map(ad=><ListoneAd ad={ad}/>) 
      :ads.filter(e=>e.categories_idcategories===(props.CatSelected)).map(ad=><ListoneAd ad={ad}/>) 
    
    }
    </div>
  )
}

export default list
