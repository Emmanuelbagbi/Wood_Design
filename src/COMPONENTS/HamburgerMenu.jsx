import '../COMPONENTS/Hamburger.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

  <div className="hamburger-menu">
    <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav className={`menu ${isOpen ? 'open' : ''}`} id='navlinks'>
      <ul>
        <li><Link to="/" className='a' >Home</Link></li>
        <li><Link to="/About" className='a' >About</Link></li>
        <li><Link to="/Shop" className='a' >Shop</Link></li>
        <li><Link to="/Exhibitions" className='a' >Exhibitions</Link></li>
        <li><Link to="/contact" className='a' >Contact</Link></li>
      </ul>
    </nav>
  </div>



  );
};

export default HamburgerMenu;