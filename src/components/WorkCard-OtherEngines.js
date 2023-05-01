import './WorkCardData-OtherEngines';
import React from 'react';

//takes WorkCardData array as props
const WorkCardOtherEngines = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt=''/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p> {props.text}</p>
                    <div className='pro-btns'>
                        <a href={props.play} target='_blank' rel='noreferrer' className='btn'>Play</a>
                        <a href={props.source} target='_blank' rel='noreferrer' className='btn'>Source</a>
                    </div>
                </div>
            </div>
  )
}

export default WorkCardOtherEngines;