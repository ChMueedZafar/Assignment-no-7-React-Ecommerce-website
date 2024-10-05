import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand-img.png'
import arrow_icion from '../Assets/arrow-img.png'
import hero_image from '../Assets/girl-img.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
      <div className='hero-hand-icon'>
        <p>new</p>
        <img src={hand_icon} alt="hand icon" className='hand-img'/>
      </div>
      <p>collections</p>
      <p>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src={arrow_icion} alt="arrow-icion" className='arrow-img' />
      </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt="hero-image" />

      </div>
    </div>
  )
}

export default Hero
