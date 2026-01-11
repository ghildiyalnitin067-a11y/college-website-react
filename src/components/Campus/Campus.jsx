import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/clg-1.jpeg'
import gallery_2 from '../../assets/clg-3.jpeg'
import gallery_3 from '../../assets/clg-6.jpeg'
import gallery_4 from '../../assets/clg-4.jpeg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus' id='c'>
       <div className="gallery">
        <img className='p1' src={gallery_1}alt="" />
        <img  className='p2' src={gallery_2}alt="" />
        <img className='p3' src={gallery_3}alt="" />
        <img className='p4' src={gallery_4}alt="" />
       </div>
       <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
