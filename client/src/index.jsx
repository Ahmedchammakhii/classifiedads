import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Signin from './views/signin/signin.jsx'
import Signup from './views/signup/signup.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Main from './views/main/main.jsx'
import Ads from './views/ads/ads.jsx'
import Detail from "./views/ad details/detail.jsx"
import User from "./views/user/user.jsx"
import Add from './views/addAd/add.jsx'
const App = () => {
 
  return (
<Routes>
<Route  path='/' element ={<Main/>}/>
<Route path='/register' element={<Signup/>}/>
<Route path='/singin' element={<Signin/>}/>
<Route path='/ads' element={<Ads/>}/>
<Route path='/ad/:id' element={<Detail/>}/>
<Route path='/user/:id' element={<User/>}/>
<Route path='/addAd' element={<Add/>}/>
</Routes>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
