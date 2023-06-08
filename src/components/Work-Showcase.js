import './WorkCard-Showcase.css';
import WorkCardShowcase from './WorkCard-Showcase';
import WorkCardDataShowcase from './WorkCardData-Showcase';
import './WorkCard-ShowcaseSub';
import WorkCardShowcaseSub from './WorkCard-ShowcaseSub';
import WorkCardDataShowcaseSub from './WorkCardData-ShowcaseSub';
import React from 'react';

const WorkShowcase = () => {
  return (
    <div className='work=container'>
        <h1 className='project-heading-showcase'>C++ Showcase</h1>
        <div className='project-container-main'>
            {WorkCardDataShowcase.map((val, ind) => {
                return (
                <WorkCardShowcase
                    key={ind}
                    vidsrc={val.vidsrc}
                    title={val.title}
                    text={val.text}
                    play={val.play}
                    source={val.source}
                />
            );  
        })}
        </div>
        <div className='project-container'>
            {WorkCardDataShowcaseSub.map((val, ind) => {
                return (
                <WorkCardShowcaseSub
                    key={ind}
                    vidsrc={val.vidsrc}
                    title={val.title}
                    text={val.text}
                />
            );  
        })}
        </div>
    </div>
  )
}

export default WorkShowcase;