import './WorkCard-Unity.css';
import logo from '../assets/unitylogo.png';
import WorkCardUnity from './WorkCard-Unity';
import WorkCardDataUnity from './WorkCardData-Unity';
import React from 'react';

const WorkUnity = () => {
  return (
    <div className='work=container'>
        <img className='project-heading-unity' src={logo} alt="Unity Logo" />
        <div className='project-container'>
            {WorkCardDataUnity.map((val, ind) => {
                return (
                <WorkCardUnity
                    key={ind}
                    vidsrc={val.vidsrc}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    play={val.play}
                    source={val.source}
                    website={val.website}
                />
            );
        })}
        </div>
    </div>
  )
}

export default WorkUnity;