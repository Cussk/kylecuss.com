import React from 'react';
import './EngineSupportSection.css';
import EngineSupportData from './EngineSupportData';

const EngineSupportSection = () => {
  return (
    <section className='engine-support' aria-labelledby='engine-support-title'>
      <div className='services-shell'>
        <div className='engine-support__heading'>
          <span className='services-eyebrow'>ENGINE SUPPORT</span>
          <h2 id='engine-support-title'>Unreal-focused, with production experience across engines.</h2>
          <p>Unreal Engine is my primary focus, but the underlying work I specialize in, including gameplay architecture, ownership, data flow, debugging, performance, and production delivery, transfers across engines and platforms.</p>
        </div>
        <div className='engine-support__grid'>
          {EngineSupportData.map((engine) => (
            <article key={engine.id} className={`engine-support-card engine-support-card--${engine.accent}`}>
              <h3>{engine.title}</h3>
              {engine.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className='engine-support-card__available'>
                <span className='engine-support-card__label'>Available for</span>
                <ul>
                  {engine.availableFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineSupportSection;
