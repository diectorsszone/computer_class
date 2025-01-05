import React, { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import Img from "../Public/logo.png";

export const Navbar = () => {
  
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  
  const [activeLink, setActiveLink] = useState("/");

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuActive(false);
  };

  return (
    <>
      <section id="header" className="header">
        <Link
          to="/" 
          className={activeLink === '/' ? 'active' : ''} 
          onClick={() => handleLinkClick('/')}
        >
          <img src={Img} alt="SSZ" className='logo'/>
        </Link>
        <div>
          <ul
            id="navbar"
            className={`navbar ${isMobileMenuActive ? 'active' : ''}`}
          >
            <li>
              <Link 
                to="/" 
                className={activeLink === '/' ? 'active' : ''} 
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={activeLink === '/courses' ? 'active' : ''} 
                onClick={() => handleLinkClick('/courses')}
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/pdf" 
                className={activeLink === '/pdf' ? 'active' : ''} 
                onClick={() => handleLinkClick('/pdf')}
              >
                Pdf Notes
              </Link>
            </li>
            <li className="mycourses">
              <Link 
                to="/mycourses" 
                className={activeLink === '/mycourses' ? 'active' : ''} 
                onClick={() => handleLinkClick('/mycourses')}
              >
                My Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={activeLink === '/contact' ? 'active' : ''} 
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </Link>
            </li>
            <a href="#" id="close" className="close" onClick={toggleMobileMenu}>
              <i className="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>
        <div id="mobile" className="mobile">
          <i
            className="fas fa-outdent"
            id="bar"
            onClick={toggleMobileMenu}
          ></i>
        </div>
      </section>
    </>
  );
};
