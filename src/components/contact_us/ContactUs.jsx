import React from 'react';
import './contact_us.css';
import SEO from '../SEO';

const Contact_us = () => {
  return (
    <section className="contact-section">
      <SEO
        title="Contact Us - Towing and Hauling Services"
        description="Get in touch with us for professional towing and hauling services in Central Florida. Contact information, address, and more."
        author="Dynamic Transportation"
        keywords="contact us, towing services, hauling services, Central Florida, vehicle transport"/>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-details">
            
            <h3>Get in Touch</h3>
            <p>If you have any questions or inquiries about our towing and hauling services, don't hesitate to reach out. Our dedicated team is ready to assist you!</p>
                <p>We are located at Valrico Florida</p>  
                <p><a href="tel:(813)403-2462">(813)403-2462</a></p>       
                <p><a href="mailto: contact@arvdynamictransportation.com "> contact@arvdynamictransportation.com </a></p>        
           
          </div>
          <div className="contact-form">
            <form action="https://formsubmit.co/contact@arvdynamictransportation.com" method="POST">
              <input type="text" placeholder="Your Name"  required/>
              <input type="email" placeholder="Your Email" required/>
              <textarea placeholder="Your Message"></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28195.78686578077!2d-82.2568095617954!3d27.9487859272128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ccff60dc72db%3A0xc6b9e1079b1cf5e4!2sValrico%2C%20FL!5e0!3m2!1sen!2sus!4v1692244248047!5m2!1sen!2sus"
          title="Google Map"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    </section>
  )
}

export default Contact_us