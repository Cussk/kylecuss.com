import './AboutContent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  'Gameplay Systems',
  'Multiplayer',
  'AI / Behavior',
  'Unreal Engine',
  'Unity',
  'Technical Architecture',
];

const AboutContent = () => {
  return (
    <section className='about-section'>
      <div className='about-shell'>
        <div className='about-grid'>
          <div className='about-copy'>
            <span className='about-copy__eyebrow'>WHO I AM</span>
            <h2 className='about-copy__title'>Building the systems behind great player experiences.</h2>

            <p>
              I’m Kyle Cuss, a gameplay and systems engineer based in Atlantic Canada. I build the
              technical foundations behind engaging games, with a focus on gameplay systems, AI
              behaviors, multiplayer features, and scalable architecture.
            </p>

            <p>
              I enjoy turning design ideas into reliable, extensible systems that teams can build
              on. My work centers on modular gameplay frameworks, maintainable architecture, and
              technical solutions that directly improve the player experience.
            </p>

            <p>
              I work primarily in Unreal Engine and Unity, and currently contribute to multiplayer
              game development with RED Gaming. Outside of team projects, I continue exploring new
              mechanics, prototypes, and systems as a solo developer.
            </p>

            <div className='about-actions'>
              <Link to='/kylecuss.com/contact'>
                <button className='btn'>Contact</button>
              </Link>

              <Link to='/kylecuss.com/case-studies'>
                <button className='btn btn-outline'>View Case Studies</button>
              </Link>
            </div>
          </div>

          <aside className='about-card'>
            <div className='about-card__block'>
              <span className='about-card__label'>Core Focus</span>
              <ul>
                <li>Gameplay systems and technical architecture</li>
                <li>AI behaviors and game-mode logic</li>
                <li>Multiplayer features and replication flow</li>
              </ul>
            </div>

            <div className='about-card__block'>
              <span className='about-card__label'>Current Work</span>
              <ul>
                <li>Gameplay & systems development with RED Gaming</li>
                <li>Multiplayer gameplay architecture and feature integration</li>
                <li>Solo prototyping for future original projects</li>
              </ul>
            </div>

            <div className='about-card__block'>
              <span className='about-card__label'>Approach</span>
              <ul>
                <li>Modular, scalable systems</li>
                <li>Design-aware engineering</li>
                <li>Player-first problem solving</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className='about-skills'>
          {skills.map((skill) => (
            <span key={skill} className='about-skill-pill'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;