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
        {click ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
    </header>
  );
};

export default NavBar;