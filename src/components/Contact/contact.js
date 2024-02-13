import React, { useState } from 'react';
import './contact.css';
 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [msg, setMsg] = useState('');

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (name === '' || email === '' || message === '') {
      setMsg('Please fill all fields');
      return false;
    }
    setMsg('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to Google Sheet or any other server
      console.log('Form submitted successfully');
    }
  };

  return (
    <div id="contact">
      <div className="container">

        <div className="row">
        <h1 className="sub-title">Get linkup with me</h1>
          <div className='left-and-right'>
          <div className="contact-left">
        
            <p>
              <i className="fa-solid fa-paper-plane"></i>zwenibonginkosi@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>0640262483
            </p>
            <p><i class="fa-solid fa-location-dot"></i>
                35861  Bardale
            </p>
              <pre>
                <p>
                  Mfuleni
                </p>
                <p>
                    cape town
                </p>
                <p>
                  7100
                </p>
            </pre>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
          </div>

          <div class="copyright">
      <p>@All rights reserved by Zweni Bonginkosi 2024<i class="fa-solid fa-heart"></i>  </p>
   </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;