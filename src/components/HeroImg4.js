import './HeroImg4.css';
import React from 'react';

const HeroImg4 = (props) => {
  return (
    <section className='hero-img-contact'>
      <div className='hero-img-contact__overlay'>
        <div className='hero-img-contact__content'>
          <span className='hero-img-contact__eyebrow'>{props.eyebrow}</span>
          <h1 className='hero-img-contact__title'>{props.heading}</h1>
          <p className='hero-img-contact__subtitle'>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImg4;