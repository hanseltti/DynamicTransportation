import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbat/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import ContactUs from './components/contact_us/ContactUs';
import Footer from './components/footer/Footer';
import SEO from './components/SEO';

const App = () => {
  return (
    <div className="App">
      <SEO title="Towing and Hauling Services in Central Florida" 
      description="We provide reliable towing and hauling services in Central Florida. Local and long-distance towing, emergency roadside assistance, and more."
      author="transportation towing and hauling"
      keywords="towing, hauling, Central Florida, vehicle transport"/>
     <Navbar /> 
     
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/home' element={<Home /> } />
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contact' element={<ContactUs />}/>
    </Routes>
  
     <Footer/>
    </div>
  )
}

export default App;