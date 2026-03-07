import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg4 from '../components/HeroImg4';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg4
        eyebrow='CONTACT'
        heading='Let’s build something great.'
        text='Whether you’re hiring for gameplay systems, multiplayer features, or technical design support, I’d love to hear about your project.'
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;