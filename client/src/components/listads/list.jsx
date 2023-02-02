import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ListoneAd from './listoneAd.jsx'
const list = (props) => {
  const [ads,setads]=useState([])
  
    useEffect(()=>{
  
    axios.get("http://127.0.0.1:3000/api/ads").then(res=>{
    setads(res.data)})
},[])
 
  return (
    <div style={{display:"flex", flexWrap: "wrap",width:"100%"}}>
    { ads.length!==0 && 
    
     props.search.length==0 ?
      props.CatSelected===0 ?  ads.map(ad=><ListoneAd ad={ad}/>) 
      :ads.filter(e=>e.categories_idcategories===(props.CatSelected)).map(ad=><ListoneAd ad={ad}/>) 
    :
    ads.filter(e=>e.name.toLowerCase()==props.search.toLowerCase() || e.description.toLowerCase().indexOf(props.search.toLowerCase())!=-1|| e.name.toLowerCase().indexOf(props.search.toLowerCase())!=-1).map(ad=><ListoneAd ad={ad}/>)
    }
    
    
    </div>
  )
}

export default list
