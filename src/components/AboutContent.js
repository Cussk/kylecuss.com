import './AboutContent.css';
import React from 'react'
import {Link} from 'react-router-dom';
import code from '../assets/code.jpg';
import symbol from '../assets/react.jpg'; 

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am an aspiring Web Developer who is currently in the process of learning and changing careers.</p>
            <p>I have a diverse work background with knowledge of the medical, construction, and manufacturing sectors.  I am thrilled to be taking the steps to break into the technology sector, which I have always had an interest in. </p>
            <p>I am excited to continue to develop my skills and take on new prjects.</p>
            <Link to='/kylecuss.com/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={code} className='img' alt='Code'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={symbol} className='img' alt='React symbol on computer screen'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;