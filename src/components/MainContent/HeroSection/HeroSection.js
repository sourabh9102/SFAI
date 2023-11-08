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

function HeroSection() {

    return (
        <>
            <div className='hero-banner'>
                <Navbar />
                <div className='hero-content'>
                    <h1 className='heroHeading'>San Francisco<br />
                        <span style={{ textShadow: '0px 0px 20px #E79FFF' }}>AI Conference!</span>
                    </h1>
                    <p className='heroPara'>Join us for an extraordinary event at the forefront of <br />artificial intelligence innovation.</p>
                </div>
            </div>

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