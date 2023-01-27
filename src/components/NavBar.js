import './NavBar.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

    //hamburger icon state change
    const [click, setClick] = useState(false);
    //cycle clicked
    const handleClick = () => setClick(!click);

    //change color state
    const [color, setColor] = useState(false);
    //when scrolling Y axis more than 100px change color state
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    //listens for a scroll, flips color state true or false when sroll
    window.addEventListener("scroll", changeColor);

    return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/kylecuss.com/'>
            <h1>Kyle Cuss</h1>
        </Link>
        {/* if clicked show nav menu else hide */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/kylecuss.com/'>Home</Link></li>
            <li><Link to='/kylecuss.com/project'>Projects</Link></li>
            <li><Link to='/kylecuss.com/about'>About</Link></li>
            <li><Link to='/kylecuss.com/resume'>Resume</Link></li>
            <li><Link to='/kylecuss.com/contact'>Contact</Link></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {/* if clicked show X icon else show hamburger icon*/}
            {click ? (
            <FaTimes size={20} style={{color: "#fff"}}/>) 
            : (
            <FaBars size={20} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default NavBar;
