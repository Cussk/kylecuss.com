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
            A focused breakdown of one gameplay architecture system, including my role, technical structure,
            and the design decisions behind it.
          </p>
        </div>

        <CaseStudyCard study={featuredStudy} featured={true} />

        <div className='featured-case-study__actions'>
          <Link to='/case-studies' className='btn'>
            Explore Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;