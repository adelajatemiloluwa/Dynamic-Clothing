import React from 'react'
import './About.css'
import thee from '../../assets/thee.jpg'


const About = () => {
  return (
    <div className='about' id="about">
      <div className="about-left">
      <img src={thee} alt="" className='thee' />
       
      </div>
      <div className="about-right">
        <h3>ABOUT DYNAMIC CLOTHING</h3>
        <h2>Discover luxury, elegance, and innovation in every piece.</h2>
        <p>Dynamic Clothings is your destination for fashion that evolves with you. We blend bold innovation with timeless elegance, creating pieces that are as versatile as they are stylish. </p>
        <p>Our collections are designed to empower your individuality, offering clothing that adapts to your lifestyle, whether you're making a statement or embracing everyday comfort. From cutting-edge trends to classic sophistication, every piece tells a story of confidence and creativity.</p>
        <p>At Dynamic Clothings, we believe fashion is more than just clothing—it's an expression of who you are. Step into a world where style meets purpose, and redefine what it means to wear your best self.</p>
      </div>
    </div>
  )
}

export default About
