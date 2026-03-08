import './FeaturedCaseStudy.css';
import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudiesData from './CaseStudiesData';
import CaseStudyCard from './CaseStudyCard';

const FeaturedCaseStudy = () => {
  const featuredStudy = CaseStudiesData.find((study) => study.featured);

  if (!featuredStudy) return null;

  return (
    <section className='featured-case-study'>
      <div className='featured-case-study__shell'>
        <div className='featured-case-study__intro'>
          <span className='featured-case-study__eyebrow'>FEATURED CASE STUDY</span>
          <h2 className='featured-case-study__title'>A closer look at my technical approach.</h2>
          <p className='featured-case-study__copy'>
            A detailed breakdown of one of the gameplay architecture challenges I designed and implemented.
          </p>
        </div>

        <CaseStudyCard study={featuredStudy} compact={true} />

        <div className='featured-case-study__actions'>
          <Link to='/case-studies' className='btn'>
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;