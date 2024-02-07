import React from 'react';
import './intro.css';
import bg from '../../assets/IMG-20230509-WA0042-removebg-preview.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='welcome'>Welcome to my portfolio</span> <br />
        <span className='introText'>I'm <span className='introName'> Zweni Bonginkosi</span> <br /><span className='introPara'>Creativity, simplicity and accuracy is what I bring to the field as a</span><br/><span className='careerName'>Junior software developer</span> </span>
    </div>
      <img src={bg} alt='bg' className='bg' />
    </section>
  )
}

export default Intro;
