import React from 'react'
import "./ads.css"
import List from '../../components/listads/list.jsx';
import Searchbar from '../../components/Searchbar/searchbar.jsx';
import Navbar from '../../components/navbar/navbar.jsx'
const ads = () => {
  return (
    
    <div>
      <Navbar/>
   <Searchbar/>
   <List/>
     
</div>

  )
}

export default ads
