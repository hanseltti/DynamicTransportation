import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
    <p>&copy; {new Date().getFullYear()} ARVDYNAMICTRANSPORTATION. All rights reserved.</p>
    <p><a href="tel:(813)403-2462">(813)403-2462</a></p>
    <p><a href="mailto: contact@arvdynamictransportation.com "> contact@arvdynamictransportation.com </a></p>
    <p>This page was made possible thanks to <a href="https://64bittechnology.com/" target='blank'>64Bit-Technology</a></p>
  </footer>
  )
}

export default Footer