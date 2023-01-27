import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg4 from '../components/HeroImg4';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg4 heading='CONTACT' text='Let&#39;s have a chat' />
      <Form ></Form>
      <Footer />
    </div>
  )
}

export default Contact;