import React from 'react';
import './Sponsorship.css'
import rightImage30 from '../../../images/rightImage30.png'
import rightImage4 from '../../../images/rightImage4.png'

function Sponsorship() {
    return (
        <>
            <div className='bgImage1' id='sponsorship'>
                <div className='card-container'>
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 148 148" fill="none">
                            <circle cx="74" cy="74" r="74" fill="white" fill-opacity="0.1" />
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
                                    <circle cx="56" cy="56" r="56" fill="white" fill-opacity="0.32" />
                                </svg>
                            </span>
                        </svg>
                        <p className='leftText'>San Francisco<span> AI Conference!</span></p>
                    </div>
                    <div className='card'>
                        <p className='rightImg30'>
                            <span className='rightCard30'>
                                30
                            </span>
                            <span className='rightCardText30'>
                                Skilled Speakers
                            </span>
                        </p>
                        <p className='rightImg4'>
                            <span className='rightCard4'>
                                4
                            </span>
                            <span className='rightCardText4'>
                                Skilled Speakers
                            </span>
                        </p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <p className='rightImg4'>
                            <span className='rightCard4'>
                                2X
                            </span>
                            <span className='rightCardText4'>
                                Networking
                                with Industry
                            </span>
                        </p>
                    </div>
                    <div className='card'>
                        <p className='rightImg30'>
                            <span className='rightCard30'>
                                15
                            </span>
                            <span className='rightCardText30'>
                                Unique
                                Workshops
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sponsorship;
