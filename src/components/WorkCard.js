import './WorkCard.css';
import React from 'react';

//takes WorkCardData array as props
const WorkCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt='Skills for Hire Website'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p> {props.text}</p>
                    <div className='pro-btns'>
                        <a href={props.view} target='_blank' rel='noreferrer' className='btn'>View</a>
                        <a href={props.source} target='_blank' rel='noreferrer' className='btn'>Source</a>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard;