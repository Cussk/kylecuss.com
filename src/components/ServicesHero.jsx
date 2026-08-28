import './ServicesHero.css';
import React from 'react';
import { Link } from 'react-router-dom';
import coding from '../assets/servicesbg.png';

const ServicesHero = () => {
  return (
    <section className='services-hero'>
      <div className='services-hero__media'>
        <img className='services-hero__image' src={coding} alt='Gameplay code on a development screen.' />
      </div>
      <div className='services-hero__content'>
        <span className='services-hero__eyebrow'>SERVICES</span>
        <h1 className='services-hero__title'>Game Programming and Technical Ownership</h1>
        <p className='services-hero__subtitle'>
          I help indie developers and small teams build, stabilize, and scale gameplay systems in Unreal
          Engine and Unity, from focused feature work to end-to-end technical implementation.
        </p>
        <div className='services-hero__actions'>
          <Link to='/contact' className='btn'>Discuss Your Project</Link>
          <Link to='/case-studies' className='btn btn-light'>View Case Studies</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;