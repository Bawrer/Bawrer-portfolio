import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [msg, setMsg] = useState('');
  const [reCAPTCHAVerified, setReCAPTCHAVerified] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]*$/; // Only letters and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
      setMsg('Please fill all fields');
      return false;
    } else if (!nameRegex.test(name)) {
      setMsg('Name can only contain letters and spaces');
      return false;
    } else if (/\d/.test(name)) {
      setMsg('Name cannot contain numbers');
      return false;
    } else if (!emailRegex.test(email)) {
      setMsg('Please enter a valid email address');
      return false;
    }
    setMsg('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!reCAPTCHAVerified) {
      setMsg('Please verify that you are not a robot');
      return;
    }

    // Email sending logic
  };

  const handleReCAPTCHAChange = (response) => {
    setReCAPTCHAVerified(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Get linkup with me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i> zwenibonginkosi@gmail.com{' '}
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>0640262483
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Cape Town{' '}
            </p>
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
                placeholder="Your Email"
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
                size="compact"
                explicit
              />
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        Back to Top
      </button>
    </div>
  );
};

export default Contact;
