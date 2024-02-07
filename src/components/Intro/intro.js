import React from 'react';
import './intro.css';
import bg from '../../assets/IMG-20231026-WA0025-removebg-preview.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='welcome'>Welcom to my portfolio</span> <br />
        <span className='introText'>I'm <span className='introName'>Bonginkosi</span> <br />Creativity, simplicity and accuracy is what I bring to the field as a<br/><span className='careerName'>Junior software developer</span> </span>
    </div>
      <img src={bg} alt='bg' className='bg' />
    </section>
  )
}

export default Intro;
