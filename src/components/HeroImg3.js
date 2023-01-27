import './HeroImg3.css'

import React from 'react'

const HeroImg3 = (props) => {
  return (
    <div className='hero-img-about'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg3;