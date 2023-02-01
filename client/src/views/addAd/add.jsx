import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'
import "./add.css"
const add = () => {
  return (
    <div className='add'>
      <Navbar/>
      <div id="card">
        <h2 style={{color:"black",textShadow:"0px 0px 0px "}}>Post an ad :  </h2>
        <div className="postname" >
        <h3>item name  : </h3>
        <input placeholder='item name'></input>
        </div>
        <div>
        <h3>item description  : </h3>
        <input type="textarea" placeholder='description ..'></input>
        </div>
        <div>
        <h3>item imgurl  : </h3>
        <input type="textarea" placeholder='description ..'></input>
        </div>
        <div className="item price" >
        <h3>price: </h3>
        <input  placeholder='price ..'></input>
        </div>
        <div className='items'>
        <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    </select>
    </div>
        <div className='submitb' >
          <button id="signinbtn" style={{borderRadius:"5px"}}>post the ad </button>
        </div>
    </div>
    </div>
  )
}

export default add
