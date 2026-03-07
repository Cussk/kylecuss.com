import './ResumeImg.css';
import React from 'react';
import ResumePDF from '../assets/Kyle_Cuss_Resume.pdf';

const ResumeImg = () => {
  return (
    <section className='resume-section'>
      <div className='resume-shell'>
        <div className='resume-header'>
          <span className='resume-header__eyebrow'>DOWNLOADABLE PDF</span>
          <h2 className='resume-header__title'>Resume</h2>
          <p className='resume-header__copy'>
            View my full resume below or download a PDF copy.
          </p>

          <a href={ResumePDF} download='Kyle_Cuss_Resume.pdf' className='btn'>
            Download Resume
          </a>
        </div>

        <div className='resume-frame-wrap'>
          <iframe
            src={ResumePDF}
            title='Kyle Cuss Resume'
            className='resume-frame'
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeImg;