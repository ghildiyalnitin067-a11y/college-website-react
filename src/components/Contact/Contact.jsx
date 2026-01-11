
import React,{useState} from 'react' 
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4ac8492e-49c1-44bc-8a34-aeae92d938c2");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success){
        console.log("Sucess",res);
        setResult(res.message);
        event.target.reset();
    }else{
        console.log("Error",res);
        setResult(res.message);
    }
  };
  return (
    <div className='contact' id='co'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>Feel Free to reach out through contact form or field our contact 
                information below. Your feedback, questions, and suggestions are
               important to us as we strive to provide exceptional ervice to our
               university community.</p>
            <ul>
               <li><img src={mail_icon} alt="" /> Contact@NitinGhildiyal</li> 
               <li><img src={phone_icon} alt="" />+91 8076750726</li> 
               <li> <img src={loc_icon} alt="" />Mansarover Park,GGSIPU USAR <br />DELHI,INDIA</li> 
            </ul>   
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">Phone no</label>
                <input type="tel" name='Phone' placeholder='Enter your mobile number'  required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
