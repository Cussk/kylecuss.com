import './CaseStudyCard.css';
import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import CaseStudiesData from './CaseStudiesData';

const CaseStudiesSection = ({ featuredOnly = false, compact = false }) => {
  const studies = featuredOnly
    ? CaseStudiesData.filter((study) => study.featured)
    : CaseStudiesData;

  return (
    <section className='case-studies-section'>
      <div className='case-studies-shell'>
        {!featuredOnly && (
          <>
            <div className='case-studies-intro'>
              <span className='case-studies-intro__eyebrow'>QUICK NAVIGATION</span>
              <p className='case-studies-intro__copy'>
                Jump to a case study below, or expand any card to read the full technical breakdown.
              </p>
            </div>

            <nav className='case-studies-nav' aria-label='Case study quick navigation'>
              {studies.map((study) => (
                <a
                  key={study.id}
                  href={`#${study.slug}`}
                  className='case-studies-nav__pill'
                >
                  {study.navLabel || study.title}
                </a>
              ))}
            </nav>
          </>
        )}

        <div className='case-studies-list'>
          {studies.map((study) => (
            <CaseStudyCard key={study.id} study={study} compact={compact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;