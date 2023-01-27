import './UnityCertsCard.css';
import UnityCertsCard from './UnityCertsCard';
import UnityCertsCardData from './UnityCertsCardData';
import logo from '../assets/Unity.png';
import React from 'react';

const UnityCerts = () => {
  return (
    <div className='work=container'>
        <img className='project-heading-certs' src={logo} alt="Unity Logo" />
        <div className='project-container'>
            {UnityCertsCardData.map((val, ind) => {
                return (
                <UnityCertsCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                />
            );
        })}
        </div>
    </div>
  )
}

export default UnityCerts;