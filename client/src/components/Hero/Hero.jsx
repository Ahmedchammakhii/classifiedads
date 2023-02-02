import React, { useState } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = (props) => {
  
  return (
    <div className='Hero '>
      <div className="mainText">
      <p id="main">Find Anything Around <span style={{"color":"#f87f59"}}>You.</span></p>
      <div id="search">      
      <div id="searchInside">
      <i class="material-symbols-outlined">manage_search</i>
        <input onChange={e=>props.setSearch(e.target.value)} placeholder='Search for ..'/>
        <button id='yallah'><Link to={`/ads/`} style={{textDecoration:"none",listStyle:"none",color:"white"}}>YALLAH</Link></button>

      </div>
      </div>
      </div>
    <div className="animatedHkeya">
<img src="https://www.x-cart.com/wp-content/themes/miniflat/build/assets/pillar-mv/main.v3.svg" class="float"/> 

    </div>
    
    
    </div>
  )
}

export default Hero
