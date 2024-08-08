import React from 'react'
import './About.css'
import thee from '../../assets/thee.jpeg'


const About = () => {
  return (
    <div className='about' id="about">
      <div className="about-left">
        <img src={thee} alt="" className='thee' />
       
      </div>
      <div className="about-right">
        <h3>ABOUT SCHOOL</h3>
        <h2>Nurturing Tomorrow's leader Today</h2>
        <p>Embark on a transformative educational journey with our 
        school's comprehensive education programs. Our cutting-edge 
        curriculum is designed to empower students with the knowledge,
        skills, and experience needed to excel in the dynamic fields of
        education. </p>
        <p>With a focus on innovation, hands-on learning, and personalized
        mentorship, our teaching prepare aspiring educators to make a 
        meaningful impact in classroom, schools, and communities. </p>
        <p>Whether you aspire to become a Teacher, Administrator,
        Counsellor,Software Engineer, Doctor, Nurse or Educational Leader, our diverse range of teaching
        offers the perfect pathway to achieve your goals and unlock your 
        full potential in shaning the future of education. </p>
      </div>
    </div>
  )
}

export default About
