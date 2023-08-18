import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
    <section id="home" className="landing">
    <div className="overlay">
      <h1>Unleashing the Power of <br /> Towing and Hauling Excellence.</h1>
      <p>24/7 towind and hauling services</p>
      <div className='home-btn-container'>     
        <a href="tel:(813)403-2462"><button className='home-btn-call'>Call Now</button></a>      
    </div>
    </div>
  </section>
    <section className="review-section">
      <div className="review-container">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          <div className="review">
            <div className="rating">
            ★★★★★
            </div>
            <p>
              "Exceptional service! DYNAMIC TRANSPORTATION helped me move my vehicle across Florida hassle-free. Highly recommend their towing and hauling services."
            </p>
            <p className="author">- Hansel S</p>
          </div>
          <div className="review">
            <div className="rating">
              ★★★★★
            </div>
            <p>
              "Professional and reliable! I was impressed by their timely delivery of my container. DYNAMIC TRANSPORTATION is my go-to for transportation needs."
            </p>
            <p className="author">- Michael Mc</p>
          </div>
          <div className="review">
            <div className="rating">
              ★★★★☆
            </div>
            <p>
              "Top-notch service! The team at DYNAMIC TRANSPORTATION moved my heavy equipment with care and precision. Will definitely use them again."
            </p>
            <p className="author">- Samuel H</p>
          </div>
        </div>
      </div>
      <div className='about-btn-container'>     
        <a href="tel:(813)403-2462"><button className='btn-call'>Call Now</button></a>      
    </div>
    </section>
    </div>
  );
}

export default Home;