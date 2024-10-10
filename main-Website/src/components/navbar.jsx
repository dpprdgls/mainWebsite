import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/bootstrap.min.css';
import Logo from '../assets/circlelogo.png';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();
    const handleClick = () => setNav(!nav);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="Logo" style={{ width: '50px' }} />
            </NavLink>
    
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {!nav ? <FaBars /> : <FaTimes />}
            </button>
    
            <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink exact to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/timeline" className={`nav-link ${location.pathname === '/timeline' ? 'active' : ''}`}>
                    Timeline
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
    
            {/* Social Icons */}
            <div className="d-none d-lg-flex flex-column position-fixed bottom-0 start-0 mb-5 ms-3">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    className="d-flex justify-content-between align-items-center text-dark"
                    href="https://www.linkedin.com/in/colin-douglas-068ba8262/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Linkedin <FaLinkedin size={30} />
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="d-flex justify-content-between align-items-center text-dark"
                    href="https://github.com/dpprdgls"
                    target="_blank" rel="noopener noreferrer"
                  >
                    GitHub <FaGithub size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };
    
    export default NavBar;