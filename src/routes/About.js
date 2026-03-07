import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg3 from '../components/HeroImg3';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg3
        eyebrow="ABOUT"
        heading="Gameplay & Systems Engineer"
        text="I build scalable gameplay systems, AI, and multiplayer experiences in Unreal Engine and Unity."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;