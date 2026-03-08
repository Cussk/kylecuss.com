import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg5 from '../components/HeroImg5';
import ResumeImg from '../components/ResumeImg';

const Resume = () => {
  return (
    <div>
      <NavBar />
      <HeroImg5
        eyebrow='RESUME'
        heading='Experience, systems, and technical work.'
        text='A formal overview of my gameplay engineering, systems development, and multiplayer-focused experience.'
      />
      <ResumeImg />
      <Footer />
    </div>
  );
};

export default Resume;