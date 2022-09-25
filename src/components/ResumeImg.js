import './ResumeImg.css';
import React from 'react';
import Resume1 from '../assets/Resume1.png';
import Resume2 from '../assets/Resume2.png';

const ResumeImg = () => {
  return (
    <div className='resume-container'>
        <img src={Resume1} alt='Resume Page 1' />
        <hr/>
        <img src={Resume2} alt='Resume Page 2' />
    </div>
  )
}

export default ResumeImg;