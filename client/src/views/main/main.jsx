import React from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import Hero from "../../components/Hero/Hero.jsx"
const main = (props) => {
  return (
    <div>
      <Navbar user={props.user} connected={props.connected}/>
    <Hero/>
    </div>
  )
}

export default main
