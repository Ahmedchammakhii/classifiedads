import React, { useState } from 'react'
import "./ads.css"
import List from '../../components/listads/list.jsx';
import Searchbar from '../../components/Searchbar/searchbar.jsx';
import Navbar from '../../components/navbar/navbar.jsx'
const ads = (props) => {
  const [CatSelected,setSelected]=useState(0);
  return (
    
    <div>
       <Navbar user = {props.user} connected={props.connected}/>
   <Searchbar setSelected={setSelected} />
   <List CatSelected ={CatSelected} />
     
</div>

  )
}

export default ads
