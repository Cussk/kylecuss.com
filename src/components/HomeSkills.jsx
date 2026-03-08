import './HomeSkills.css';
import React from 'react';

const HomeSkills = () => {
  return (
    <section className='home-skills'>
      <div className='home-skills__shell'>
        <div className='home-skills__intro'>
          <span className='home-skills__eyebrow'>SKILLS</span>
          <h2 className='home-skills__title'>Technical focus and production strengths.</h2>
        </div>

        <div className='home-skills__grid'>
          <div className='home-skills__column'>
            <h3 className='home-skills__heading home-skills__heading--green'>Core Technologies</h3>
            <div className='home-skills__pills'>
              <span className='home-skills__pill'>C++</span>
              <span className='home-skills__pill'>Unreal Engine</span>
              <span className='home-skills__pill'>Unity</span>
              <span className='home-skills__pill'>C#</span>
              <span className='home-skills__pill'>Blueprint</span>
              <span className='home-skills__pill'>Addressables</span>
            </div>
          </div>

          <div className='home-skills__column'>
            <h3 className='home-skills__heading home-skills__heading--blue'>Systems Focus</h3>
            <div className='home-skills__pills'>
              <span className='home-skills__pill home-skills__pill--blue'>Gameplay Systems</span>
              <span className='home-skills__pill home-skills__pill--blue'>Multiplayer</span>
              <span className='home-skills__pill home-skills__pill--blue'>AI / Behavior</span>
              <span className='home-skills__pill home-skills__pill--blue'>Replication</span>
              <span className='home-skills__pill home-skills__pill--blue'>Technical Architecture</span>
              <span className='home-skills__pill home-skills__pill--blue'>Data-Driven Design</span>
            </div>
          </div>

          <div className='home-skills__column'>
            <h3 className='home-skills__heading home-skills__heading--pink'>Production Tools</h3>
            <div className='home-skills__pills'>
              <span className='home-skills__pill home-skills__pill--pink'>Perforce</span>
              <span className='home-skills__pill home-skills__pill--pink'>Git</span>
              <span className='home-skills__pill home-skills__pill--pink'>Rider</span>
              <span className='home-skills__pill home-skills__pill--pink'>Play Asset Delivery</span>
              <span className='home-skills__pill home-skills__pill--pink'>Scriptable Objects</span>
              <span className='home-skills__pill home-skills__pill--pink'>Gameplay Tags</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;