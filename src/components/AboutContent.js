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
            <p>I'm Kyle Cuss, a gameplay and systems engineer based in Atlantic Canada. I focus on building the technical foundations that make games work — gameplay systems, AI behaviors, multiplayer features, and scalable architecture.</p>
            <p>My work centers around turning design ideas into reliable and extensible systems. I enjoy solving complex gameplay problems, building modular frameworks, and creating tools that allow teams to iterate quickly while keeping systems stable and maintainable.</p>
            <p>I primarily work with Unreal Engine and Unity, developing gameplay mechanics, AI systems, multiplayer features, and player progression systems. I enjoy the intersection of engineering and design, where technical decisions directly shape the player experience.</p>
            <p>I currently contribute to multiplayer game development with RED Gaming, helping design and implement gameplay systems and technical architecture for ongoing projects.</p>
            <p>When I’m not collaborating with teams, I continue experimenting with new mechanics, prototypes, and systems as a solo developer.</p>
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

