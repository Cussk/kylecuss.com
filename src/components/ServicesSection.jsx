import './ServicesSection.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ServicesData from './ServicesData';

const processSteps = [
  ['assess', 'Assess', 'Review the current project, constraints, technical risks, and existing ownership and data flow.'],
  ['define', 'Define', 'Agree on deliverables, exclusions, dependencies, acceptance criteria, and the required handoff.'],
  ['implement', 'Implement', 'Build in small, testable stages while preserving stable project behavior and existing team workflows.'],
  ['validate', 'Validate', 'Test the relevant editor, packaged-build, performance, and multiplayer paths for the agreed scope.'],
  ['document', 'Document', 'Provide the technical notes, setup guidance, and usage documentation needed to continue the work safely.'],
];

const engagements = [
  ['scoped-milestones', 'Scoped Milestones', 'Defined systems or feature packages with agreed deliverables, exclusions, testing, and acceptance criteria.'],
  ['ongoing-contract-support', 'Ongoing Contract Support', 'Hourly or milestone-based development embedded within an existing team and codebase.'],
  ['end-to-end-technical-ownership', 'End-to-End Technical Ownership', 'Programming responsibility across a larger prototype or indie project, from technical planning through implementation and launch support.'],
];

const ServicesSection = () => {
  return (
    <main className='services-page'>
      <section className='services-overview'>
        <div className='services-shell services-overview__content'>
          <span className='services-eyebrow'>HOW I CAN HELP</span>
          <h2>Technical support for complete projects and difficult systems.</h2>
          <div className='services-overview__copy'>
            <p>I work with existing teams, solo developers, and project owners who need reliable technical implementation. An engagement can cover one focused system, recovery of a difficult codebase, or ongoing ownership of the programming required to move a game toward release.</p>
            <p>The scope is defined around concrete deliverables, acceptance criteria, and the level of documentation or handoff the project requires.</p>
          </div>
        </div>
      </section>

      <section className='services-grid-section' aria-labelledby='services-grid-title'>
        <div className='services-shell'>
          <div className='services-section-heading'>
            <span className='services-eyebrow'>CAPABILITIES</span>
            <h2 id='services-grid-title'>Build the right system for the next milestone.</h2>
          </div>
          <div className='services-grid'>
            {ServicesData.map((service) => (
              <article key={service.id} className={`service-card service-card--${service.accent}${service.featured ? ' service-card--featured' : ''}`}>
                <div className='service-card__main'>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <div className='service-card__suitable'>
                    <span className='service-card__label'>Suitable for</span>
                    <p>{service.suitableFor}</p>
                  </div>
                </div>
                <div className='service-card__deliverables'>
                  <span className='service-card__label'>Typical deliverables</span>
                  <ul>
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-process' aria-labelledby='services-process-title'>
        <div className='services-shell'>
          <div className='services-section-heading'>
            <span className='services-eyebrow'>PROCESS</span>
            <h2 id='services-process-title'>Clear ownership, scoped implementation, verifiable results.</h2>
          </div>
          <div className='services-process__grid'>
            {processSteps.map(([id, title, text], index) => (
              <article key={id} className='services-step'>
                <span className='services-step__number'>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-engagements' aria-labelledby='services-engagements-title'>
        <div className='services-shell'>
          <div className='services-section-heading'>
            <span className='services-eyebrow'>ENGAGEMENTS</span>
            <h2 id='services-engagements-title'>Flexible ways to work together.</h2>
          </div>
          <div className='services-engagements__grid'>
            {engagements.map(([id, title, text]) => (
              <article key={id} className='engagement-card'>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-cta'>
        <div className='services-shell services-cta__content'>
          <span className='services-eyebrow'>START A CONVERSATION</span>
          <h2>Have a project, difficult system, or codebase that needs direction?</h2>
          <p>Send a short overview of the project, its current state, and the result you need. I can help determine whether the work is best approached as a focused milestone, an architectural recovery, or an ongoing development engagement.</p>
          <div className='services-cta__actions'>
            <Link to='/contact' className='btn'>Discuss Your Project</Link>
            <Link to='/case-studies' className='btn btn-light'>Review My Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesSection;