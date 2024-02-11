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
          <div className="contact-left">
            <h1 className="sub-title">Get linkup with me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i>zwenibonginkosi@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>0640262483
            </p>
            
            <a href="/Bonginkosi's CV.pdf" download className="btn btn2">
              Download My CV
            </a>
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
      </div>
    </div>
  );
};

export default Contact;