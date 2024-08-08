import React from 'react'
import './Testimonial.css'
import user1 from '../../assets/user1.jpeg'
import user2 from '../../assets/user2.jpeg'
import user3 from '../../assets/user3.jpeg'
import user4 from '../../assets/user4.jpeg'  

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
                            <h3>Carson James</h3>
                            <span>Educity, Philipinnes</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Educity was one of
                        the best decision i've ever made.The supportive community,
                    state of life art facilities and commitment to academic
                    excellence have truly exceeded my expectations </p>
                </div>
            </li>
    
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>Hughes White</h3>
                            <span>Edusity, Philipinnes.</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Educity was one of
                        the best decision i've ever made.It's a very good 
                        school if you want to be great and good in life.
                        The supportive community,state of life art facilities
                         and commitment to academic excellence have truly exceeded my expectations </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Scott Will</h3>
                            <span>Brunnel, Philipinnes</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Brunner was one of
                    the best decision i've ever made.The supportive community,
                    state of life art facilities and commitment to academic
                    excellence have truly exceeded my expectations.  </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>Hummels Brown</h3>
                            <span>Brunnel, UK</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Brunner was one of
                    the best decision i've ever made.The supportive community,
                    state of life art facilities and commitment to academic
                    excellence have truly exceeded my expectations </p>
                </div>
            </li> 
        </ul>

      </div>
    </div>
    
  )
}

export default Testimonial
