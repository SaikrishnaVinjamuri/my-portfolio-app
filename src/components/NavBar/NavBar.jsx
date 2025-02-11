import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='components'>
        <Link to="home" smooth={true} duration={500} className='componentsItems'>Home</Link>
        <Link to="about" smooth={true} duration={500} className='componentsItems'>About</Link>
        <Link to="education" smooth={true} duration={500} className='componentsItems'>Education</Link>
        <Link to="skill" smooth={true} duration={500} className='componentsItems'>Skills</Link>
        <Link to="projects" smooth={true} duration={500} className='componentsItems'>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className='componentsItems'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;