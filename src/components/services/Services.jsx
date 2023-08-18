import React from 'react';
import './services.css';
import SEO from '../SEO';

const Services = () => {
  return (
    <section>
      <SEO
        title="Our Services - Towing and Hauling"
        description="Explore our comprehensive range of towing and hauling services in Central Florida. Local and long-distance towing, emergency roadside assistance, and more."
        author="Dynamic Transportation"
        keywords="towing services, hauling services, Central Florida, vehicle transport"/>

    <section className="picture-grid">
      <div className="picture-container">
        <div className="picture-item">
          <img src="/imgs_publics/towing_car_man_workin.jpg" className='picture-item' alt="man towing a car" />
        </div>
        <div className="picture-item">
          <img src="/imgs_publics/car_truck_bed.jpg" alt="tow truck " />
        </div>
        <div className="picture-item">
          <img src="/imgs_publics/van_trailer.jpg" alt="trailer pulling" />
        </div>
      </div>
    </section>
     <section className="services-section">
     <div className="services-container">
       <h2>Our Services</h2>
       <p>Discover the comprehensive range of towing and hauling services we offer in Central Florida. We're dedicated to providing reliable solutions for all your transportation needs.</p>
       <div className='about-btn-container'>     
        <a href="tel:(813)403-2462"><button className='btn-call'>Call Now</button></a>      
    </div>
       <div className="services-list">
         <div className="service">
           <h3>Local Towing Services</h3>
           <p>Responsive and reliable towing assistance for local areas in Central Florida, available whenever you need us.</p>
         </div>
         <div className="service">
           <h3>Long-Distance Towing</h3>
           <p>Secure and efficient vehicle transportation across Florida, ensuring timely delivery and peace of mind.</p>
           <p>Need to transport your vehicle over a long distance? Our long-distance towing services are designed to securely move your car, truck, or SUV across Florida, providing peace of mind and timely delivery.</p>
         </div>
         <div className="service">
           <h3>Heavy Equipment Hauling</h3>
           <p>From construction equipment to large machinery, our heavy equipment hauling services offer specialized trailers and expertise to move your heavy loads safely and efficiently.</p>
         </div>
         <div className="service">
           <h3>Boat and Watercraft Transport</h3>
           <p>Planning a boating adventure? Our boat and watercraft transport services ensure your vessel reaches its destination intact, allowing you to enjoy your time on the water.</p>
         </div>
         <div className="service">
           <h3>Container Transport</h3>
           <p>Whether you're relocating or need to move containers, we offer container transport services that are tailored to your needs, ensuring timely delivery and handling.</p>
         </div>
         <div className="service">
           <h3>RV and Camper Towing</h3>
           <p>Exploring the great outdoors in your RV or camper? Our towing services are equipped to handle RVs and campers, providing reliable transportation for your home on wheels.</p>
         </div>
         <div className="service">
           <h3>Emergency Roadside Assistance</h3>
           <p>24/7 support for unexpected breakdowns, flat tires, dead batteries, and more, getting you back on the road swiftly.</p>
         </div>
         <div className='about-btn-container'>     
        <a href="tel:(813)403-2462"><button className='btn-call'>Call Now</button></a>      
    </div>
         {/* Add more services here */}
       </div>
     </div>
   </section>
    </section>
  )
}

export default Services