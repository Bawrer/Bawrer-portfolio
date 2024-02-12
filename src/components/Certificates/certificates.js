import React from 'react';
 import './certificates.css'
 import img1 from '../../assets/git (1).png'
 import img2 from '../../assets/b24465f8-60b0-421d-b868-be8f9dcd508d.jpg'
 
 

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

const Certificates = () => (
  <div id="certificates">
    <div className="container">
      <h1 className="sub-title">Certificates</h1>
      <div className="cert-list">
        <WorkItem
          imageSrc={img2}
          title="Intro to python"
          description="This certicate shows that I have succesfully completed a course by demostrating theoretical and practical understanding of Intro to python."
          link="#"
        />
        <WorkItem
          imageSrc= {img1} 
          title="IBM certificate"
          description="Through self-paced learning, this badge earner has displayed an understanding of topics such as Git concepts,
                      using command-line, advantages of using GIT,
                      installing and running GIT on you local computer."
          link="https://www.credly.com/badges/411d2f3c-c187-4eeb-8b23-cf6dfee30c86/print"
        />

      </div>
      <a href="https://github.com/Bawrer?tab=repositories" className="btn">See More</a>
    </div>
  </div>
);

export default Certificates;