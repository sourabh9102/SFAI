import React from 'react'
import logo from '../../images/logo.png';
import './Footer.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Timer from '../MainContent/HeroSection/Timer';

function Footer() {
    return (
        <>
            <div id='contact'>
                <div className='footerBgImage'>
                    <div>
                        <p className='footerHeading1'>
                            Count Every
                            <br />
                            <span className='footerHeading2'>
                                Second Until Event
                            </span>
                        </p>
                        <Timer />
                    </div>
                    <div className='flex-container'>
                        <div>
                            <img src={logo} alt='Footer Logo' />
                            <p className='footerText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div>
                            <p className='footerQuickLinks'>QUICK LINKS</p>
                            <ul className='footerLinks'>
                                <li><a className="active" href="#home">HOME</a></li>
                                <li><a href="#speakers">SPEAKERS</a></li>
                                <li><a href="#sponsorship">SPONSORSHIP</a></li>
                                <li><a href="#travel">TRAVEL</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className='footerQuickLinks'>CONTACT US</p>
                            <p style={{ width: '201px' }}>27 Division St, San Francisco,<br />
                                SF 94016, USA</p>
                            <p>+1 800 123 456 789</p>
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaTwitter />
                        </div>
                        <div>
                            <p className='footerQuickLinks'>SUBSCRIBE</p>
                            <input type='text' placeholder='Get news & updates       @' />
                            <p className='footerSubscribe'>Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex'>
                        <p>© 2023 San Francisco AI Conference LLC. All Rights Reserved.</p>
                        <p>Made w/   Savior</p>
                        <p>Terms of Use | Proposal Terms</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Footer