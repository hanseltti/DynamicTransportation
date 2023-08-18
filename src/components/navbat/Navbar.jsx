import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menu_open, set_menu_open] = useState(false);

  return (
  <nav>   
      
        <div className='business__title'>DYNAMIC TRANSPORTATION</div>
        
        <div className='menu' onClick={() => set_menu_open(!menu_open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

    <ul className={menu_open ? "open" : ""}>
      <li >
        <NavLink to="/home" >HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/services">SERVICES</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT-US</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;