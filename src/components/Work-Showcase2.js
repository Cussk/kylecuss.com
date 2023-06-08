import './WorkCard-Showcase.css';
import WorkCardShowcase2 from './WorkCard-Showcase2';
import WorkCardDataShowcase2 from './WorkCardData-Showcase2';
import './WorkCard-ShowcaseSub';
import WorkCardShowcaseSub2 from './WorkCard-ShowcaseSub2';
import WorkCardDataShowcaseSub2 from './WorkCardData-ShowcaseSub2';
import React from 'react';

const WorkShowcase2 = () => {
  return (
    <div className='work=container'>
        <h1 className='project-heading-showcase'>Unreal Blueprints Showcase</h1>
        <div className='project-container-main'>
            {WorkCardDataShowcase2.map((val, ind) => {
                return (
                <WorkCardShowcase2
                    key={ind}
                    vidsrc={val.vidsrc}
                    title={val.title}
                    text={val.text}
                    play={val.play}
                    source={val.source}
                />
            );  
        })},
        </div>
        <div className='project-container'>
            {WorkCardDataShowcaseSub2.map((val, ind) => {
                return (
                <WorkCardShowcaseSub2
                    key={ind}
                    vidsrc={val.vidsrc}
                    title={val.title}
                    text={val.text}
                />
            );  
        })},
        </div>
    </div>
  )
}

export default WorkShowcase2;