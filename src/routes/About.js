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
        text="Creating experiences at META4 Interactive with UEFN and Verse, with a background in Unreal Engine and Unity gameplay systems."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
