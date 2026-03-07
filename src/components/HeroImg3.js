import './HeroImg3.css';
import React from 'react';

const HeroImg3 = (props) => {
  return (
    <section className='hero-img-about'>
      <div className='hero-img-about__overlay'>
        <div className='hero-img-about__content'>
          <span className='hero-img-about__eyebrow'>{props.eyebrow}</span>
          <h1 className='hero-img-about__title'>{props.heading}</h1>
          <p className='hero-img-about__subtitle'>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;