import React from 'react';
import './WelcomePage.css';
import welcomePageImage from '../../../images/welcomePageImage.png';

function WelcomePage() {
    return (
        <div className="welcome-container">
            <div className="left-content">
                <p className="welcomePagePara">Welcome to</p>
                <p className="welcomePageHeading" style={{ marginTop: '15px' }}>San Francisco <span>AI Conference!</span></p>

                <img src={welcomePageImage} alt="Welcome Page Image" className='welcomeParaImage'/>
            </div>
            <div className="right-content">
                <p className="welcomePageSidePara">
                    <span>Join us for an extraordinary event at the forefront of artificial intelligence innovation. Founded by a passionate group of technologists and engineers, the San Francisco AI Conference is the ultimate gathering for those eager to explore the limitless potential of AI. Prepare to be captivated by thought-provoking discussions, enlightening presentations, and unrivaled networking opportunities.</span>
                    <br /><br />
                    <span>At the San Francisco AI Conference, we go beyond the ordinary. Our mission is to delve into AI topics that have yet to be thoroughly explored. Join us as we uncover the groundbreaking impacts of AI across various industries and sectors. From technical innovation to the realms of art, music, criminal justice, immigration, and countless others, we'll shed light on the limitless possibilities that AI holds for the future.</span>
                    <br /><br />
                    <span className="sideParaSpan">What sets us apart are the prestigious and world-renowned speakers who will grace our stage. These luminaries, experts in their respective fields, will share their insights, experiences, and visions for the future of AI. Be prepared to be inspired, challenged, and enlightened as they take you on an extraordinary journey.</span>
                </p>
            </div>
        </div >
    );
}

export default WelcomePage;
