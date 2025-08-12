import './ProjectsCard.css';
import React from 'react';

//takes WorkCardData array as props
const ProjectsCard = (props) => {
  return (
    <div className='project-card-main'>
                <img src={props.imgsrc} alt='Waffle Smash Logo'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p> {props.text}</p>
                    <div className='pro-btns'>
                        <a href={props.website} target='_blank' rel='noreferrer' className='btn'>Website</a>
                    </div>
                </div>
            </div>
  )
}

export default ProjectsCard;