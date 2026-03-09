import './HomeAbout.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <section className='home-about'>
      <div className='home-about__shell'>
        <div className='home-about__content'>
          <span className='home-about__eyebrow'>ABOUT</span>
          <h2 className='home-about__title'>Engineering gameplay systems built to scale.</h2>

          <div className='home-about__copy'>
            <p>
              I build gameplay systems, multiplayer architecture, and AI behaviors in Unreal Engine and Unity,
              with a focus on modular design, clean technical boundaries, and production-ready implementation.
            </p>
            <p>
              My work emphasizes subsystem-driven architecture, data-driven configuration, and scalable gameplay
              frameworks that support multiple modes, evolving content, and long-term maintainability.
            </p>
          </div>

          <div className='home-about__actions'>
            <Link to='/about' className='btn btn-light'>More About Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;