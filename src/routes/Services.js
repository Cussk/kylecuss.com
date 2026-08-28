import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServicesHero from '../components/ServicesHero';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div>
      <NavBar />
      <ServicesHero />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;