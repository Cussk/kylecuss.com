import './NavBar.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const changeColor = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener('scroll', changeColor);
    changeColor();

    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <header className={scrolled ? 'header header-bg' : 'header'}>
      <NavLink to='/kylecuss.com/' className='header__brand' onClick={closeMenu}>
        <h1>Kyle Cuss</h1>
      </NavLink>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <NavLink to='/kylecuss.com/' end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/kylecuss.com/case-studies' onClick={closeMenu}>
            Case Studies
          </NavLink>
        </li>
        <li>
          <NavLink to='/kylecuss.com/about' onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/kylecuss.com/resume' onClick={closeMenu}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to='/kylecuss.com/contact' onClick={closeMenu}>
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
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </header>
  );
};

export default NavBar;