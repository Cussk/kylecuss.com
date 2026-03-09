import './HeroSpecialties.css';
import React from 'react';

const specialties = [
  'Gameplay Systems',
  'Multiplayer Architecture',
  'AI Behaviors',
  'Technical Architecture',
];

const HeroSpecialties = () => {
  return (
   <section className='hero-specialties'>
    <div className='hero-specialties__shell'>
        <span className='hero-specialties__eyebrow'>SPECIALTIES</span>

        <div className='hero-specialties__list'>
        {specialties.map((item) => (
            <span key={item} className='hero-specialties__pill'>
            {item}
            </span>
        ))}
        </div>
    </div>
    </section>
  );
};

export default HeroSpecialties;