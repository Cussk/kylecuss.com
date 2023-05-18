import './WorkCard-Showcase.css';
import WorkCardShowcase from './WorkCard-Showcase';
import WorkCardDataShowcase from './WorkCardData-Showcase';
import React from 'react';

const WorkShowcase = () => {
  return (
    <div className='work=container'>
        <h1 className='project-heading'>My Favorite Projects</h1>
        <div className='project-container'>
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
    </div>
  )
}

export default WorkShowcase;