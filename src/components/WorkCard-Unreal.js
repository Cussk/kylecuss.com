import './WorkCardData-Unreal';
import React from 'react';

//takes WorkCardData array as props
const WorkCardUnreal = (props) => {
  return (
    <div className='project-card'>
                <video controls src={props.vidsrc} alt=''/>
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

export default WorkCardUnreal;