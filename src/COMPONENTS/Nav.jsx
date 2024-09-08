import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom';


function Nav() {
    const [isSticky, setIsSticky] = useState(false);
      
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 150);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return(
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#" className="logo">
          <img src="/src/assets/IMAGES/A-First_Blood-removebg-preview.png" alt="" />
      </a>

      <ul className="navlinks">
      <Link to="/" className='a' >Home</Link>
      <Link to="/About" className='a' >About</Link>
      <Link to="/Shop" className='a' >Shop</Link>
      <Link to="/Exhibitions" className='a' >Exhibitions</Link>
      <Link to="/contact" className='a' >Contact</Link>
      </ul>

      <div className="nav-side">
          <a href="#" className="n-btn">Say Hello</a>
          <div className="bx bx-menu" id="menu-icon">
          <HamburgerMenu/>
          </div>
      </div>
  </header>
    );
}
export default Nav