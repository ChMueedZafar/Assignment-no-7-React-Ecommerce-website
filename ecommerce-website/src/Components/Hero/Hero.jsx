import React from 'react';
import './Hero.css';
import handicon from '../Assets/hand-img.png'
import arrowIcon from '../Assets/arrow-img.png';
import heroImage from '../Assets/girl-img-removebg-preview.png';

const Hero = () => {


  return (
   <div className='hero'>
    <div className='hero-left'>
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className='hero-hand-icon'>
        <p>new</p>
        <img  src={handicon} alt="hand icon img" className='handimg'/>
        </div>
        <p>Collections</p>
        <p>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
        <div>Latest Collection</div>
         <img src={arrowIcon} alt="arrowimg" className='arrowimg' />
      </div>
    </div>
    <div className='hero-right'>
      <img src={heroImage} alt="hero-img" className='heroimg' />
    </div>
   </div>
  );
};

export default Hero;