import React from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="SFAI" className="navLogo" />
            </div>
            <div>
                <ul className="navLinks">
                    <li><a className="active" href="#home">HOME</a></li>
                    <li><a href="#speakers">SPEAKERS</a></li>
                    <li><a href="#sponsorship">SPONSORSHIP</a></li>
                    <li><a href="#travel">TRAVEL</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                </ul>
            </div>
            <div>
                <button className="navBtn">BUY TICKETS</button>
            </div>
        </div>
    );
}

export default Navbar;
