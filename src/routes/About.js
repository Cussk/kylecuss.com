import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg3 from '../components/HeroImg3';
import AboutContent from '../components/AboutContent';
import UnityCerts from '../components/UnityCerts';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg3 heading='ABOUT' text='I am a Game Developer dedicated to continously learning and honing my craft'/>
      <AboutContent />
      <UnityCerts />
      <Footer />
    </div>
  )
}

export default About;