import React from 'react'
import Footer from './Components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import ReferralForm from './Components/Contact/ReferralForm'


const App = () => {
  return (
    <BrowserRouter>
       <div>
      <div className="container">
            <ReferralForm/>
            <Footer/>

         </div>
  
    
    </div>
    </BrowserRouter>

    
  )
}

export default App
