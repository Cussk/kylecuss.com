import './Footer.css';
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaTwitter} from 'react-icons/fa';

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
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                cussprogramming@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>This is Kyle Cuss, a Game Developer from Atlantic Canada.  I enjoy building new worlds and systems to make engaging and dynamic gaming experiences.</p>
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