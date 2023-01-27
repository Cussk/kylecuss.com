import './WorkCard-Unreal.css';
import logo from '../assets/UnrealLogo.png';
import WorkCardUnreal from './WorkCard-Unreal';
import WorkCardDataUnreal from './WorkCardData-Unreal';
import React from 'react';

const WorkUnreal = () => {
  return (
    <div className='work=container'>
        <img className='project-heading-unreal' src={logo} alt="Unreal Logo" />
        <div className='project-container'>
            {WorkCardDataUnreal.map((val, ind) => {
                return (
                <WorkCardUnreal
                    key={ind}
                    vidsrc={val.vidsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                />
            );
        })}
        </div>
    </div>
  )
}

export default WorkUnreal;