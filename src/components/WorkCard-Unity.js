import './WorkCard-Unity.css';
import React from 'react';

const WorkCardUnity = (props) => {
  return (
    <div className='project-card'>
      {props.vidsrc ? (
        <>
          <video controls src={props.vidsrc} alt='' />
          <h2 className='project-title'>{props.title}</h2>
          <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
              <a href={props.play} target='_blank' rel='noreferrer' className='btn'>Play</a>
              <a href={props.source} target='_blank' rel='noreferrer' className='btn'>Source</a>
            </div>
          </div>
        </>
      ) : props.imgsrc ? (
        <div className='project-card-main'>
          <img className='project-card-image' src={props.imgsrc} alt='' />
          <h2 className='project-title'>{props.title}</h2>
          <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
              <a href={props.website} target='_blank' rel='noreferrer' className='btn'>Website</a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WorkCardUnity;
