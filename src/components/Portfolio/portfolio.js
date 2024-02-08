import React from 'react';
import './portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Bank App',
      description: 'Bank app that allows customers to deposit and withdraw money',
      image: '/images/project 1.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Metric Convertor',
      description: 'Metric converter that allows people from different parts of the world to be able to convert unit from one of to another.',
      image: '/images/Screenshot (72).png',
      link: '#',
    },
    {
      id: 3,
      title: 'Intro to Python',
      description: 'This certicate shows that I have succesfully completed a course by demostrating theoretical and practical understanding of Intro to python.',
      image: '/images/b24465f8-60b0-421d-b868-be8f9dcd508d.jpg',
      link: 'https://www.sololearn.com/certificates/CC-HABIYLN0',
    },
    {
      id: 4,
      title: 'IBM Certificate',
      description: 'Through self-paced learning, this badge earner has displayed an understanding of topics such as Git concepts, using command-line, advantages of using GIT, installing and running GIT on you local computer.',
      image: '/images/git (3).png',
      link: 'https://www.credly.com/badges/411d2f3c-c187-4eeb-8b23-cf6dfee30c86/print',
    },
    {
      id: 5,
      title: '5 Stars Group Website',
      description: 'This is a website that we built to help students who are willing to take part on the IT industry and those who are looking for jobs as well.',
      image: '/images/Screenshot (73).png',
      link: '#',
    },
    {
      id: 6,
      title: 'Tax Calculator',
      description: 'This is a tax calculator that helps people of different age groups to calculate their tax for the whole year after reductions.',
      image: '/images/Screenshot (76).png',
      link: '#',
    },
  ];

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="projects">
        {projects.map(project => (
          <div className="work" key={project.id}>
            <img src={project.image} alt="" height="250px" />
            <div className="layer">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/Bawrer?tab=repositories" className="btn">See More</a>
    </div>
  );
};

export default Portfolio;