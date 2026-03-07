import './Footer.css';
import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-item'>
            <FaHome className='footer-item__icon' size={20} />
            <div>
              <p>Gander Bay, Newfoundland and Labrador,</p>
              <p>Canada.</p>
            </div>
          </div>

          <div className='footer-item'>
            <FaMailBulk className='footer-item__icon' size={20} />
            <a href='mailto:cussprogramming@gmail.com' className='footer-email'>
              cussprogramming@gmail.com
            </a>
          </div>
        </div>

        <div className='footer-right'>
          <h4 className='footer-title'>Kyle Cuss — Gameplay & Systems Engineer</h4>
          <p className='footer-copy'>
            I design and build scalable gameplay systems, AI, and multiplayer features in Unreal
            Engine and Unity.
          </p>

          <div className='social'>
            <a href='https://www.linkedin.com/in/kyle-cuss' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
              <FaLinkedin className='social-icon' size={26} />
            </a>

            <a href='https://github.com/Cussk' target='_blank' rel='noreferrer' aria-label='GitHub'>
              <FaGithub className='social-icon' size={26} />
            </a>

            <a href='https://twitter.com/cuss_kyle' target='_blank' rel='noreferrer' aria-label='Twitter'>
              <FaTwitter className='social-icon' size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;