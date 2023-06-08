import './AboutContent.css';
import React from 'react'
import {Link} from 'react-router-dom';
import code from '../assets/code.jpg';
import esports from '../assets/e-sports.jpg'; 

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a Game Developer with a passion for all things gaming.</p>
            <p>I have a diverse work background with knowledge of the medical, construction, and manufacturing sectors.  I am excited about putting my programming and development skills to work within the gaming industry. </p>
            <p>I am excited to continue to develop my skills and take on new projects.</p>
            <Link to='/kylecuss.com/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={code} className='img' alt='Code'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={esports} className='img' alt='React symbol on computer screen'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;