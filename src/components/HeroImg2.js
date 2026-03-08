import './HeroImg2.css';
import React from 'react';

const HeroImg2 = (props) => {
  return (
    <section className='hero-img-case-studies'>
      <div className='hero-img-case-studies__overlay'>
        <div className='hero-img-case-studies__content'>
          <span className='hero-img-case-studies__eyebrow'>{props.eyebrow}</span>
          <h1 className='hero-img-case-studies__title'>{props.heading}</h1>
          <p className='hero-img-case-studies__subtitle'>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImg2;