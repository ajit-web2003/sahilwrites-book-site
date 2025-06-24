import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Navbar-specific styling

function Navbar() {
  // Track whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu when hamburger icon is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a nav link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        
        {/* Site logo / brand name */}
        <Link to="/" className="logo" onClick={closeMenu}>
          SahilWrites
        </Link>

        {/* Hamburger icon for mobile menu */}
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about-author" onClick={closeMenu}>About</Link></li>
          <li><Link to="/buy-links" onClick={closeMenu}>Buy</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
