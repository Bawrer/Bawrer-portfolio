import emailjs from 'emailjs-com'; // Import Email.js library
import React, { useState } from 'react';
import './contact.css';
import ReCAPTCHA from "react-google-recaptcha";

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
    if (!validateForm()) return; // If form validation fails, do not submit

    // Check if reCAPTCHA is verified
    if (!reCAPTCHAVerified) {
      setMsg('Please verify that you are not a robot');
      return;
    }

    // Send email using Email.js
    emailjs.sendForm('service_buqghte', 'template_b7ap1p3', e.target, 'TyJwVDyeaaOkUE4R8')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setMsg('Message sent successfully');
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setMsg('Failed to send message');
      });
  };

  const [reCAPTCHAVerified, setReCAPTCHAVerified] = useState(false);

  const handleReCAPTCHAChange = (response) => {
    // Called when reCAPTCHA verification is successful
    setReCAPTCHAVerified(true);
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Get linkup with me</h1>
         
              <p><i className="fa-solid fa-paper-plane"></i> zwenibonginkosi@gmail.com </p>
              <p><i className="fa-solid fa-phone"></i>0640262483</p>
              <p><i className="fa-solid fa-location-dot"></i>35861 Bardale</p>
              
                  <pre>
                    <p>Mfuleni</p>
                    <p>cape town</p>
                    <p>7100</p>
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
                  type="email"
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

                <ReCAPTCHA
                  sitekey="6LeqsXIpAAAAABapuWM3lvuiFJZbP5vZHFEpS8l5"
                  onChange={handleReCAPTCHAChange}
                />
                <button type="submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg">{msg}</span>
            </div>
          </div>
          <div className="copyright">
            <p>@All rights reserved by Zweni Bonginkosi 2024 <i className="fa-solid fa-heart"></i></p>
          </div>
        </div>
      </div>
   
  );
};

export default Contact;
