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
                <button className="navBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M12.6066 0.999843C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156737L2.6066 -0.000156611C2.05432 -0.000156948 1.6066 0.447559 1.6066 0.999843C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999843ZM1.70711 12.3136L12.3137 1.70695L10.8995 0.292736L0.292893 10.8993L1.70711 12.3136Z" fill="#8D36DF" />
                    </svg>&nbsp;&nbsp;
                    BUY TICKETS
                </button>
            </div>
        </div>
    );
}

export default Navbar;
