import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero '>
      <div className="mainText">
      <p id="main">Find Anything Around <span style={{"color":"#f87f59"}}>You.</span></p>
      <div id="search">      
      <div id="searchInside">
      <i class="material-symbols-outlined">manage_search</i>
        <input placeholder='Search for ..'/>
        <button id='yallah'>YALLAH</button>

      </div>
      </div>
      </div>
    <div className="animatedHkeya">
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250" class="float"> 
  <path d="M162.97813680934928 22.322755687248517 C133.5267107964994 4.220802320369753 46.08719302726689 6.149128849028987 25.165451671146883 33.66908430892465 C1.2038062958600229 65.18765641290562 19.115705253260238 172.2007831585263 54.85839995469925 189.23136189339544 C91.86703348437473 206.86513160387233 185.4270373761192 150.21022545059142 199.3201036950584 111.64117700247039 C207.48995733608507 88.96054814336367 183.51608534864963 34.94615078355253 162.97813680934928 22.322755687248517Z" stroke="none" fill="#f87f59"  />
  
</svg>
    </div>
    
    
    </div>
  )
}

export default Hero
