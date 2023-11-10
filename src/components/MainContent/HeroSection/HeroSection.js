import React, { useState, useEffect } from 'react'
import './HeroSection.css'
import heroImage1 from '../../../images/heroImage.png'
import companiesImages from '../../../images/companiesImages.png'
import companyTech from '../../../images/companyTech.png'
import companyVision from '../../../images/companyVision.png'
import companyNlla from '../../../images/companyNlla.png'
import companyConsult from '../../../images/companyConsult.png'
import companyMagna from '../../../images/companyMagna.png'
import companyLogo from '../../../images/companyLogo.png'
import companyMollit from '../../../images/companyMollit.png'
import Navbar from '../../Navbar/Navbar'
import heroIcon1 from '../../../images/heroIcon1.png'
import heroIcon2 from '../../../images/heroIcon2.png'
import heroIcon3 from '../../../images/heroIcon3.png'
import heroArrowIcon from '../../../images/heroArrowIcon.png'
import Timer from './Timer'
import heroMaskImage from '../../../images/heroMaskImage.png'
import heroBottomLeftImage from '../../../images/heroBottomLeftImage.png'

function HeroSection() {
    const heroBannerStyle = {
        backgroundImage: `url(${heroMaskImage}), url(${heroImage1}), url(${companiesImages}), url(${companyTech}), url(${companyVision}), url(${companyNlla}), url(${companyConsult}), url(${companyMagna}), url(${companyLogo}), url(${companyMollit})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
    };

    const bottomLeftImageStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
    };

    return (
        <>
            <div className='hero-banner' style={heroBannerStyle}>
                <Navbar />
                <img src={heroBottomLeftImage} alt="Bottom Left Image" style={bottomLeftImageStyle} />
                <div style={{ textAlign: 'left' }}>
                    <h1 className='heroHeading'>San Francisco<br />
                        <span style={{ textShadow: '0px 0px 20px #E79FFF' }} className='heroHeading2'>
                            AI Conference!
                        </span>
                    </h1>
                    <p className='heroPara'>
                        Join us for an extraordinary event at the forefront of
                        <br />
                        artificial intelligence innovation.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='relative' style={{ position: 'relative' }}>
                            <img src={heroIcon1} alt='Hero Icon 1' className='heroIconImage1' style={{ zIndex: '1' }} />
                            <img src={heroIcon2} alt='Hero Icon 2' className='heroIconImage2' style={{ zIndex: '2', marginLeft: '-20px' }} />
                            <img src={heroIcon3} alt='Hero Icon 3' className='heroIconImage3' style={{ zIndex: '3', marginLeft: '-20px' }} />&nbsp;&nbsp;
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p className='heroIconPara' style={{ color: 'white' }}>
                                Skilled Speakers &nbsp;&nbsp;
                                <img src={heroArrowIcon} alt='Arrow Icon' />
                            </p>
                        </div>
                    </div>

                    <div className='timerPosition'>
                        <Timer />
                    </div>

                    <button className='heroBtn1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M12.6066 0.999843C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156737L2.6066 -0.000156611C2.05432 -0.000156948 1.6066 0.447559 1.6066 0.999843C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999843ZM1.70711 12.3136L12.3137 1.70695L10.8995 0.292736L0.292893 10.8993L1.70711 12.3136Z" fill="#8D36DF" />
                        </svg>&nbsp;&nbsp;
                        BUY TICKETS
                    </button>
                    <button className='heroBtn2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M12.6066 0.999843C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156737L2.6066 -0.000156611C2.05432 -0.000156948 1.6066 0.447559 1.6066 0.999843C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999843ZM1.70711 12.3136L12.3137 1.70695L10.8995 0.292736L0.292893 10.8993L1.70711 12.3136Z" fill="white" />
                        </svg>&nbsp;&nbsp;
                        <span>READ MORE</span>
                    </button><br />
                    <button className='heroBtn3'>
                        <span className='heroBtn3Content'>Join us at 7th San Francisco AI Conference! July 5-9 2018.</span>
                        <button className='heroBtn3Btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M12.6066 0.999843C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156737L2.6066 -0.000156611C2.05432 -0.000156948 1.6066 0.447559 1.6066 0.999843C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999843ZM1.70711 12.3136L12.3137 1.70695L10.8995 0.292736L0.292893 10.8993L1.70711 12.3136Z" fill="white" />
                            </svg>&nbsp;&nbsp;
                            REGISTER NOW
                        </button>
                    </button>
                </div>
            </div >

            <div className="image-container">
                <div className="overlay-images">
                    <img src={companyTech} alt="Overlay Image" />
                    <img src={companyVision} alt="Overlay Image" />
                    <img src={companyNlla} alt="Overlay Image" />
                    <img src={companyConsult} alt="Overlay Image" />
                    <img src={companyMagna} alt="Overlay Image" />
                    <img src={companyLogo} alt="Overlay Image" />
                    <img src={companyMollit} alt="Overlay Image" />
                </div>
            </div>
        </>
    )
}

export default HeroSection