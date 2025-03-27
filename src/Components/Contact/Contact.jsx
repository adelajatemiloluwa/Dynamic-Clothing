import React from 'react'
import './Contact.css'
import messageicon from '../../assets/messageicon.jpeg'
import mailicon from '../../assets/mailicon.jpeg'
import phoneicon from '../../assets/phoneicon.jpeg'
import locationicon from '../../assets/locationicon.jpeg'
import dark_arrow from '../../assets/dark_arrow.jpeg'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "33a6a43e-7f1b-4b57-b6b0-fb216a72c8cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message  <img src={messageicon} alt="" /></h3>
            <p>Feel free to reach out through contact form and find our contact
            information below. Your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            customers. </p>
            <ul>
                <li> <img src={mailicon} alt="" />Contact@adelajarauf36@gmail.com</li>
                <li> <img src={phoneicon} alt="" />08161213325</li>
                <li> <img src={locationicon} alt="" />Ijebu-ode<br/>Ogun State, Nigeria</li>

            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your name</label>
                <input type="text" name = 'name' placeholder='Enter your name'
                 required/>
                 <label>Phone number</label>
                 <input type= "tel" name='phone' placeholder='Enter your mobile number' required/>
                 <label>Email</label>
                 <input type= "tel" name='email' placeholder='Enter your email' required/>
                 <label>Write your message here</label>
                 <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                 <button type='submit' className='btn dark-btn'>Submit now <img src={dark_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div> 
    </div>
  )
}

export default Contact
