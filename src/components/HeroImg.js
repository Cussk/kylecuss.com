import './HeroImg.css';
import React from 'react';
import desk from '../assets/desk.jpg';
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={desk} alt="Working at desk."/>
        </div>
        <div className='content'>
            <p>HI, I'M KYLE CUSS</p>
            <h1>Web Developer</h1>
            <div>
                <Link to='/kylecuss.com/project' className='btn'>Projects</Link>
                <Link to='/kylecuss.com/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
    
  )
};

export default HeroImg;