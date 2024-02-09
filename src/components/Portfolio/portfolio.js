import React from 'react';
 import './portfolio.css'
 import image1 from '../../assets/Screenshot (72).png'

const WorkItem = ({ imageSrc, title, description, link }) => (
  <div className="work">
    <img src={imageSrc} alt={title} height="250px" />
    <div className="layer">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
);

const Portfolio = () => (
  <div id="portfolio">
    <div className="container">
      <h1 className="sub-title">My Work</h1>
      <div className="work-list">
        <WorkItem
          imageSrc={image1}
          title="Social Media App"
          description="Chatbot that provides people who have questions about our website with automated responses."
          link="#"
        />
        <WorkItem
          imageSrc="../../"
          title="Bank App"
          description="Bank app that allows customers to deposit and withdraw money."
          link="#"
        />
        <WorkItem
          imageSrc=""
          title="Metric Converter"
          description="Metric converter that allows people from different parts of the world to be able to convert units from one to another."
          link="#"
        />

<WorkItem
          imageSrc="./images/Screenshot (75).png"
          title="Social Media App"
          description="Chatbot that provides people who have questions about our website with automated responses."
          link="#"
        />
        <WorkItem
          imageSrc="../../"
          title="Bank App"
          description="Bank app that allows customers to deposit and withdraw money."
          link="#"
        />
        <WorkItem
          imageSrc="/assets/Screenshot (72).png"
          title="Metric Converter"
          description="Metric converter that allows people from different parts of the world to be able to convert units from one to another."
          link="#"
        />
        {/* Add more WorkItem components for additional works */}
      </div>
      <a href="https://github.com/Bawrer?tab=repositories" className="btn">See More</a>
    </div>
  </div>
);

export default Portfolio;