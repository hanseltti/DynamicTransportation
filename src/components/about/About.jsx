import React from 'react';
import './about.css';
import SEO from '../SEO';

const About = () => {
  return (
    <div className='about-main-container'>
      <SEO
        title="About Us - Towing and Hauling Services"
        description="Learn about our professional towing and hauling services in Central Florida. Dedicated to providing prompt and reliable solutions for your transportation needs."
        author="Dynamic Transportation"
        keywords="about us, towing services, hauling services, Central Florida"/>

      <section className="about-banner"></section>
      <section id="about" className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="grid-container">
          <div className="grid-item">
            <p>
              Welcome to <span className='about-span'>dynamic transportation</span> , your reliable partner for towing and hauling services in Central Florida. With years of experience, we take pride in offering top-notch solutions to meet all your transportation needs.
            </p>
          </div>
          <div className="grid-item">
            <p>
              Our team of skilled professionals is dedicated to providing safe and efficient towing and hauling services. Whether you need assistance with vehicle towing, container transport, or heavy equipment hauling, we've got you covered. 
            </p>
          </div>
          <div className="grid-item">
            <p>
              At <span className='about-span'>dynamic transportation</span> , we prioritize customer satisfaction and strive to exceed your expectations. We understand the importance of timely and secure transportation, and our commitment to quality service sets us apart in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className='about-btn-container'>     
        <a href="tel:(813)403-2462"><button className='btn-call'>Call Now</button></a>      
    </div>
    </div>
  )
}

export default About