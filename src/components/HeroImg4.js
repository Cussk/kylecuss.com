import './HeroImg4.css'

import React from 'react'

const HeroImg4 = (props) => {
  return (
    <div className='hero-img-contact'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg4;