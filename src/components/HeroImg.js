import './HeroImg.css';
import React from 'react';
import desk from '../assets/desk.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <section className='home-hero'>
      <div className='home-hero__mask'>
        <img className='home-hero__image' src={desk} alt='Kyle Cuss working at desk.' />
      </div>

      <div className='home-hero__content'>
        <span className='home-hero__eyebrow'>KYLE CUSS</span>
        <h1 className='home-hero__title'>Gameplay & Systems Engineer</h1>
        <p className='home-hero__subtitle'>
          Building scalable multiplayer gameplay systems,<br />
          AI behaviors, and data-driven architecture<br /> 
          in Unreal Engine and Unity.
        </p>

        <div className='home-hero__actions'>
          <Link to='/case-studies' className='btn'>View Case Studies</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroImg;