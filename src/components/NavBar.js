import './NavBar.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick((prev) => !prev);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const changeColor = () => {
      setScrolled(window.scrollY >= 60);
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setClick(false);
      }
    };

    window.addEventListener('scroll', changeColor);
    window.addEventListener('resize', handleResize);

    changeColor();
    handleResize();

    return () => {
      window.removeEventListener('scroll', changeColor);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={scrolled || click ? 'header header-bg' : 'header'}>
      <NavLink to='/' className='header__brand' onClick={closeMenu}>
        <h1>Kyle Cuss</h1>
      </NavLink>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <NavLink to='/' end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/case-studies' onClick={closeMenu}>
            Case Studies
          </NavLink>
        </li>
        <li>
          <NavLink to='/services' onClick={closeMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/resume' onClick={closeMenu}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        type='button'
        className='hamburger'
        onClick={handleClick}
        aria-label={click ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={click}
      >
        {click ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
    </header>
  );
};

export default NavBar;