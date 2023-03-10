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
 const [connected , setConnected]=useState(false)
 const [user,setUser] = useState()
 const [search,setSearch]=useState("")
  return (
<Routes>
<Route  path='/' element ={<Main user = {user} connected={connected} setSearch={setSearch}/>}/>
<Route path='/register' element={<Signup />}/>
<Route path='/singin' element={<Signin setConnected={setConnected} setUser={setUser} />}/>
<Route path='/ads' element={<Ads user = {user} connected={connected} search={search} setSearch={setSearch} />}/>
<Route path='/ads/:id' element={<Detail user = {user} connected={connected}  />}/>
<Route path='/user/:id' element={<User connected={connected} user={user} />}/>
<Route path='/addAd' element={<Add connected={connected} user={user} />}/>
<Route path='/ads/user/:id' element={<Ads connected={connected} user={user}  />}/>

</Routes>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
