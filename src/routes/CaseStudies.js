import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import CaseStudiesSection from '../components/CaseStudiesSection';

const CaseStudies = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2
        eyebrow='CASE STUDIES'
        heading='Technical breakdowns of systems, gameplay, and multiplayer architecture.'
        text='A closer look at how I approach modular systems, multiplayer gameplay, and implementation challenges across production.'
      />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

export default CaseStudies;