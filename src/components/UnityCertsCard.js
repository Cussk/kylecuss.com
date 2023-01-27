import './UnityCertsCard.css';
import React from 'react';

//takes WorkCardData array as props
const UnityCertsCard = (props) => {
  return (
    <div className='project-card-certs'>
                <img src={props.imgsrc} alt=''/>
                <h2 className='project-title-certs'>{props.title}</h2>
                <div className='pro-details'>
                    <p> {props.text}</p>
                    <div className='pro-btns-certs'>
                        <a href={props.view} target='_blank' rel='noreferrer' className='btn'>View</a>
                    </div>
                </div>
            </div>
  )
}

export default UnityCertsCard;