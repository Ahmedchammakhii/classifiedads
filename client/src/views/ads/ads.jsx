import React, { useState } from 'react'
import "./ads.css"
import List from '../../components/listads/list.jsx';
import Searchbar from '../../components/Searchbar/searchbar.jsx';
import Navbar from '../../components/navbar/navbar.jsx'
import { Button } from '@mui/material';
const ads = (props) => {
  const [CatSelected,setSelected]=useState(0);
  return (
    
    <div>
       <Navbar setSearch={props.setSearch} user ={props.user} connected={props.connected}/>
   <Searchbar setSelected={setSelected} />
   <Button  onClick={(e)=>{props.setSearch("")}}>Reset</Button>
  
   <List search={props.search} setSearch={props.setSearch} CatSelected ={CatSelected} />
     
</div>

  )
}

export default ads
