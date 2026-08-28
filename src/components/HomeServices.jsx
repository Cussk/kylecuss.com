import './HomeServices.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeServicesData } from './ServicesData';

const HomeServices = () => {
  return (
    <section className='home-services'>
      <div className='home-services__shell'>
        <div className='home-services__intro'>
          <span className='home-services__eyebrow'>SERVICES</span>
          <h2 className='home-services__title'>Programming support from focused systems to full-project ownership.</h2>
          <p className='home-services__copy'>I work with indie developers and game teams on implementation, architectural recovery, multiplayer gameplay, and milestone-based development in Unreal Engine and Unity.</p>
        </div>
        <div className='home-services__grid'>
          {HomeServicesData.map((service) => (
            <article key={service.id} className={`home-service-card home-service-card--${service.accent}`}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
        <div className='home-services__actions'>
          <Link to='/services' className='btn'>View Services</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;