import React from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="SFAI" className="navLogo" />
            </div>
            <div>
                <ul className="navLinks">
                    <li>
                        <Link
                            to="home"
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}>HOME</Link>
                    </li>
                    <li>
                        <Link
                            to="speakers"
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}>SPEAKERS</Link></li>
                    <li>
                        <Link
                            to="sponsorship"
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}>SPONSORSHIP</Link></li>
                    <li>
                        <Link
                            to="travel"
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}>TRAVEL</Link></li>
                    <li>
                        <Link
                            to="faq"
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}>FAQ</Link></li>
                    <li>
                        <Link
                            to="contact"
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}>CONTACT US</Link></li>
                </ul>
            </div>
            <div>
                <button className="navBtn">BUY TICKETS</button>
            </div>
        </div>
    );
}

export default Navbar;
