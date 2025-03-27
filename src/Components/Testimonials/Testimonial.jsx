import React from 'react'
import './Testimonial.css'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpeg'



 

const Testimonial = () => {
  return (
    
    <div className='testimonial' id='testimonial'>        
    <div className="slider">
        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>Adelaja Waheed</h3>
                        </div>
                    </div>
                    <p>I am beyond impressed with the outfit! The attention to detail, perfect fit, and high-quality finishing exceeded my expectations. You truly brought my vision to life with such creativity and skill. I highly recommend Dynamic Clothings to anyone looking for top-notch designs and exceptional craftsmanship. Thank you for making me look and feel amazing ! </p>
                </div>
            </li>
        </ul>

      </div>
    </div>
    
  )
}

export default Testimonial
