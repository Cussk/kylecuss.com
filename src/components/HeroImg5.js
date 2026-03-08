import './HeroImg5.css';
import React from 'react';

const HeroImg5 = (props) => {
  return (
    <section className='hero-img-resume'>
      <div className='hero-img-resume__overlay'>
        <div className='hero-img-resume__content'>
          <span className='hero-img-resume__eyebrow'>{props.eyebrow}</span>
          <h1 className='hero-img-resume__title'>{props.heading}</h1>
          <p className='hero-img-resume__subtitle'>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImg5;