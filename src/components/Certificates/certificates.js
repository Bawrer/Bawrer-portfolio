import React from 'react';
 import './certificates.css'
import cert1 from '../../assets/b24465f8-60b0-421d-b868-be8f9dcd508d.jpg'
import cert2 from '../../assets/git (1).png'
 

const WorkItem = ({ imageSrc, title, description, link }) => (
  <div className="cert" id='cert'>
    <img src={imageSrc} alt={title} height="250px" />
    <div className="layer">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
);

const Certificates = () => (
  <div id="portfolio">
    <div className="container">
      <h1 className="sub-title">My certificates</h1>
      <div className="work-list">
        
        <WorkItem
         imageSrc= {cert1} 
          title="Maths Calculator"
          description="Maths calculator for numeric operations."
          link="#"
        />
        <WorkItem
          imageSrc= {cert2}  
          title="Tax calculator"
          description="Tax calculator project to help people to calculate their annual tax."
          link="#"
        />
        {/* Add more WorkItem components for additional works */}
      </div>
      <a href="https://github.com/Bawrer?tab=repositories" className="btn">See More</a>
    </div>
  </div>
);

export default Certificates;