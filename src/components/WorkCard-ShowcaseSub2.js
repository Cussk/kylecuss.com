import './WorkCard-ShowcaseSub2.css';
import React from 'react';

//takes WorkCardData array as props
const WorkCardShowcaseSub2 = (props) => {
  return (
    <div className='project-card'>
                <video controls src={props.vidsrc} alt=''/>
                <h2 className='project-title-sub'>{props.title}</h2>
                <div className='pro-details'>
                    <p> {props.text}</p>
                </div>
            </div>
  )
}

export default WorkCardShowcaseSub2;