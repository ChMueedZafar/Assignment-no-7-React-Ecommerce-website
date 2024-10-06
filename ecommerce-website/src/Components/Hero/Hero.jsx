import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand-img.png';
import arrowIcon from '../Assets/arrow-img.png';
import heroImage from '../Assets/girl-img.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* Left Side - Text and Icons */}
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>

          <div className="hero-info">
            <div className="hero-hand-icon">
              <p className="new-tag">new</p>
              <img src={handIcon} alt="Hand pointing to new collections" className="hand-img" />
            </div>
            <p className="hero-tagline">Collections</p>
            <p className="hero-tagline">For Everyone</p>
          </div>

          <div className="hero-latest-btn">
            <div className="latest-btn-text">Latest Collection</div>
            <img src={arrowIcon} alt="Arrow pointing to the latest collection" className="arrow-img" />
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="hero-right">
          <img src={heroImage} alt="Fashionable woman showcasing the latest collection" className="hero-img" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
