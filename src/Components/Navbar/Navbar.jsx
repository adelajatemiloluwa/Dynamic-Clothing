import React, { useEffect, useState } from 'react'
import './Navbar.css'
import picture from "../../assets/the.jpeg"
import { Link} from "react-router-dom"
import { Link as Scroll, animateScroll as scroll } from "react-scroll";
import menuicon from '../../assets/menuicon.jpeg'


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="container"> {/* Remove sticky logic */}
      <img src={picture} alt="logo" className="picture" />
      <ul className={mobileMenu ? '' : 'hide-mobile-icon'}>
        <li><Scroll to='hero' smooth={true} offset={0} duration={500}>Home</Scroll></li>
        <li><Scroll to='program' smooth={true} offset={0} duration={500}>Collections</Scroll></li>
        <li><Scroll to='about' smooth={true} offset={0} duration={500}>About us</Scroll></li>
        <li><Scroll to='campus' smooth={true} offset={0} duration={500}>Wears</Scroll></li>
        <li><Scroll to='testimonial' smooth={true} offset={0} duration={500}>Feedbacks</Scroll></li>
        <li><Scroll to='contact' smooth={true} offset={0} duration={500}><button className='btn'>Contact Us</button></Scroll></li>
      </ul>
      <img src={menuicon} alt="menu" className='menuicon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;