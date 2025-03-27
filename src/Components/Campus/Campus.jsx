import React from 'react'
import './Campus.css'
import gallery from '../../assets/gallery.jpg'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import whitearrow from '../../assets/whitearrow.jpeg'

const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <div className="gallery">
        <img src={gallery} alt="" />
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
      </div>
    </div>
  )
}

export default Campus
