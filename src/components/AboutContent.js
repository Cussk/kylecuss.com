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
            <p>I am a Game Engineer with 2+ years of professional experience building engaging, polished games in Unity (C#). Skilled in gameplay, UI, and tools programming with a focus on performance, scalable architecture, and player-focused design.</p>
            <p>My past work includes optimizing core systems like Scene Management and Tutorials with Scriptable Objects and Dependency Injection, integrating Unity Addressables for efficient asset management, and delivering smooth Android/iOS deployments. I am passionate about creating intuitive, high-quality experiences that enhance gameplay and user satisfaction.</p>
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

