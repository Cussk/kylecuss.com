import './Footer.css';
import React from 'react'
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <div>
                        <p>Gander Bay, Newfoundland,</p>
                        <p>Canada.</p>
                    </div>
                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                1-705-641-0213</h4>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                cussprogramming@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>This is Kyle Cuss, a Web Developer from Atlantic Canada.  I enjoy taking designs and creating responsive, funtional projects.</p>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/kyle-cuss' target='_blank' rel='noreferrer'>
                        <FaLinkedin className='social-icon' size={30} style={{marginRight: '1rem'}}/>
                    </a>
                    <a href='https://github.com/Cussk' target='_blank' rel='noreferrer'>
                        <FaGithub className='social-icon' size={30} style={{marginRight: '1rem'}}/>
                    </a>
                    <a href='https://twitter.com/cuss_kyle' target='_blank' rel='noreferrer'>
                        <FaTwitter className='social-icon' size={30} style={{marginRight: '1rem'}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;