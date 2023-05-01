import './WorkCard-OtherEngines';
import WorkCardOtherEngines from './WorkCard-OtherEngines';
import WorkCardDataOtherEngines from './WorkCardData-OtherEngines';
import React from 'react';

const WorkOtherEngines = () => {
  return (
    <div className='work=container'>
        <h1 className='project-heading'>Other Engine Projects</h1>
        <div className='project-container'>
            {WorkCardDataOtherEngines.map((val, ind) => {
                return (
                <WorkCardOtherEngines
                    key={ind}
                    imgsrc={val.imgsrc}
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

export default WorkOtherEngines;