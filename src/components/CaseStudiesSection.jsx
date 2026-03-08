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
          <div className='case-studies-intro'>
            <p className='case-studies-intro__copy'>
              Click any card to read the full technical breakdown — problem, approach, solution,
              and results.
            </p>
          </div>
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