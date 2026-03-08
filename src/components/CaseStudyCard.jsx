import './CaseStudyCard.css';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CaseStudyCard = ({ study, compact = false }) => {
  const [expanded, setExpanded] = useState(false);

  const showDetails = expanded || compact;

  return (
    <article className={`case-study-card ${expanded ? 'expanded' : ''} ${compact ? 'compact' : ''}`}>
      <div className="case-study-card__media-wrapper">
        <button
          type='button'
          className='case-study-card__media'
          onClick={() => setExpanded((prev) => !prev)}
          aria-label={expanded ? 'Collapse case study' : 'Expand case study'}
          aria-expanded={expanded}
        >
          <img src={study.image} alt={study.title} />

          {study.logo && (
            <span className='case-study-card__tag case-study-card__tag--logo'>
              <img src={study.logo} alt={`${study.tag} logo`} />
            </span>
          )}
        </button>

        {study.caption && (
          <p className="case-study-card__caption">
            {study.caption}
          </p>
        )}
      </div>

      <div className='case-study-card__body'>
        <div className='case-study-card__header'>
          <div className='case-study-card__heading-group'>
            <h2 className='case-study-card__title'>{study.title}</h2>
            <p className='case-study-card__subtitle'>{study.subtitle}</p>
          </div>

          {!compact && (
            <button
              className='case-study-card__toggle'
              type='button'
              onClick={() => setExpanded((prev) => !prev)}
              aria-label={expanded ? 'Collapse case study' : 'Expand case study'}
              aria-expanded={expanded}
            >
              {expanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          )}
        </div>

        <div className='case-study-card__metrics'>
          {study.metrics.map((metric) => (
            <div key={metric.label} className='case-study-card__metric'>
              <span className='case-study-card__metric-value'>{metric.value}</span>
              <span className='case-study-card__metric-label'>{metric.label}</span>
            </div>
          ))}
        </div>

        {showDetails && (
          <div className='case-study-card__details'>
            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>Overview</span>
              <p>
                Bedroom Brawl is a multiplayer Unreal Engine project featuring multiple gameplay
                modes with shared progression systems, AI behaviors, and dynamic objectives. The
                architecture was built so new game modes could be implemented without duplicating
                core gameplay logic.
              </p>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>The Problem</span>
              <p>{study.problem}</p>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>Design Goals</span>
              <ul className='case-study-card__results'>
                <li>Support multiple gameplay modes without duplicating code</li>
                <li>Maintain strict server authority for multiplayer gameplay</li>
                <li>Allow systems to be reused across different game modes</li>
                <li>Minimize actor tick overhead</li>
                <li>Enable designers to configure gameplay without modifying code</li>
              </ul>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>The Approach</span>
              <p>{study.approach}</p>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>Technical Implementation</span>
              <p>{study.solution}</p>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>Key Challenges</span>
              <ul className='case-study-card__results'>
                {study.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>Results</span>
              <ul className='case-study-card__results'>
                {study.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <div className='case-study-card__section'>
              <span className='case-study-card__eyebrow'>Key Technologies</span>
              <div className='case-study-card__tech-pills'>
                {study.technologies.map((tech) => (
                  <span key={tech} className='case-study-card__tech-pill'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default CaseStudyCard;