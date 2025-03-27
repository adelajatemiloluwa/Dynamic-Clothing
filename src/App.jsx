import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/cloth/cloth'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
       <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title Subtitle='OUR COLLECTIONS' title= 'What we have'/>
            <Program/>
            <About/>
            <Title Subtitle='THE COLLECTIONS' title= 'Explore our Designs'/>
            <Campus/>
            <Title Subtitle='FASHION FEEDBACKS' title= 'What Our Clients Are Saying'/>
            <Testimonial/>
            <Title Subtitle='Contact Us' title= 'Get in Touch'/>
            <Contact/>
            <Footer/>
         </div>
  
    
    </div>
    </BrowserRouter>

    
  )
}

export default App
