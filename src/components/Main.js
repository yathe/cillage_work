
import React from 'react'
import Getinvolved from './Getinvolved'
import Home from './Home'
import Whatwedo from './Whatwedo'
import OurDomain from './OurDomain'
import About from './About'
import Whoweare from './Whoweare'

const Main = () => {
  return (
    <div style={{backgroundColor:"#e1b470"}}>
        <Home/>
        <Whatwedo/>
        <OurDomain />
        <Getinvolved/>
        <About />
        <Whoweare />
      
        
    </div>
  )
}

export default Main;