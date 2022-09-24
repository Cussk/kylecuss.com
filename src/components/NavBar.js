import './NavBar.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

    //hamburger icon state change
    const [click, setClick] = useState(false);
    //cycle clicked
    const handleClick = () => setClick(!click);

    return (
    <div className='header'>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        {/* if clicked show nav menu else hide */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
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
