import React, { useState } from 'react';
import './About.css';
import aboutImage from '../../assets/WhatsApp Image 2023-10-14 at 12.45.56 PM.jpeg'; // Importing the image

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            {/* Displaying the image */}
            <img src={aboutImage} alt="profile" className="about-image" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">Get to know</h1>
            <div className="tab-titles">
              {/* Your tab links */}
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => openTab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => openTab('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => openTab('education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
              {/* Skills content */}
              <ul>
                <li>
                  <span>Web development</span>
                  <br />
                  Responsive Design Email Subscribe form
                </li>
                <li>
                  <span>Blog</span>
                  <br />
                  Blog (HTML, CSS, javaScript, C++, python)
                </li>
                <li>
                  <span>Add Design</span>
                  <br />
                  Currently Working on a Messaging App (Like WhatsApp)
                </li>
                <li>
                  <span>Functional Portfolio</span>
                  <br />
                  Using (HTML, CSS, js)
                </li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
              {/* Experience content */}
              <ul>
                <li>
                  <span>Internship</span>
                  <br />
                  I am a candidate at CAPACITI career Tech Accelerator
                  <br />
                  2023-224
                </li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
              {/* Education content */}
              <ul>
                <li>
                  <span>High School</span>
                  <br />
                  Bekizulu sss
                  <br />
                  2017
                </li>
                <li>
                  <span>University</span>
                  <br />
                  Walter Sisulu University
                </li>
                <li>
                  <span>Course</span>
                  <br />
                  BSc in Physics
                  <br />
                  2019-2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
