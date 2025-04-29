
import React from 'react'
import './Getinvolved.css'
import partner from '../photos/partner.jpg'
import vol from "../photos/volunteer.jpg"
const Getinvolved = () => {
  return (
    <div className='container12'><div className="text-container">
    <h1>Get Involved</h1>
</div>
<div className='grid1'>
  <div className='section1'>
  
 
  <h5 className="label1">Volunteer  with  us</h5>

<img src={vol} alt="Technology Demonstration" className="image1" />
  </div>
  <div className='section1'>

  <h5 className="label1">Partner with us</h5>

<img src={partner} alt="Technology Demonstration" className="image1" />
  </div>

  </div>
  <div className='line1'></div></div>
  )
}


export default Getinvolved
