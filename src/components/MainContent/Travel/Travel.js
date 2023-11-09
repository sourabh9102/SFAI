import React from 'react';
import './Travel.css';
import { BsSunFill } from 'react-icons/bs';

function Travel() {
    return (
        <>
            <div id='travel'>
                <div className='card-container'>
                    <div className='card'>
                        <p className='travelHeading'>Choose your <span className='travelHeadingText'>ticket</span></p>
                        <button className='travelBtn'>
                            <span className='travelBtnText'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.1458 2.33715C13.1747 1.78563 12.751 1.31509 12.1995 1.28619L3.21184 0.815165C2.66032 0.78626 2.18978 1.20993 2.16088 1.76146C2.13197 2.31299 2.55564 2.78352 3.10717 2.81242L11.0962 3.23111L10.6775 11.2201C10.6486 11.7717 11.0723 12.2422 11.6238 12.2711C12.1753 12.3 12.6459 11.8763 12.6748 11.3248L13.1458 2.33715ZM1.66913 13.0649L12.8163 3.02796L11.478 1.54167L0.330869 11.5786L1.66913 13.0649Z" fill="#8D36DF" />
                                </svg>
                                view all tickets
                            </span>
                        </button>
                        <p className='travelSubHeading'>pricing plans</p>
                        <p className='travelPara'>
                            Attending such an event can expose you to different ways of thinking about economic issues and help you broaden your understanding of the field.
                        </p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div className='card1'>
                            <BsSunFill /><span className='travelPriceCardHead'> standard</span>
                            <p className='travelPriceCard'>$850</p>
                            <p className='travelPriceCardTopic'>Main Conference</p>
                            <p className='travelPriceCardPara'>Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food.</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.1458 2.33764C13.1747 1.78611 12.751 1.31558 12.1995 1.28668L3.21184 0.815653C2.66032 0.786748 2.18978 1.21042 2.16088 1.76195C2.13197 2.31347 2.55564 2.78401 3.10717 2.81291L11.0962 3.2316L10.6775 11.2206C10.6486 11.7722 11.0723 12.2427 11.6238 12.2716C12.1753 12.3005 12.6459 11.8768 12.6748 11.3253L13.1458 2.33764ZM1.66913 13.0654L12.8163 3.02845L11.478 1.54216L0.330869 11.5791L1.66913 13.0654Z" fill="#8D36DF" />
                                </svg>
                                <span className='travelPriceCardBtn'>buy ticket now</span>
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card2'>
                            <BsSunFill /><span className='travelPriceCardHead'> premium</span>
                            <p className='travelPriceCard'>$950</p>
                            <p className='travelPriceCardTopic'>Conference & Workshop</p>
                            <p className='travelPriceCardPara'>
                                Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshops.
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.1458 2.33764C13.1747 1.78611 12.751 1.31558 12.1995 1.28668L3.21184 0.815653C2.66032 0.786748 2.18978 1.21042 2.16088 1.76195C2.13197 2.31347 2.55564 2.78401 3.10717 2.81291L11.0962 3.2316L10.6775 11.2206C10.6486 11.7722 11.0723 12.2427 11.6238 12.2716C12.1753 12.3005 12.6459 11.8768 12.6748 11.3253L13.1458 2.33764ZM1.66913 13.0654L12.8163 3.02845L11.478 1.54216L0.330869 11.5791L1.66913 13.0654Z" fill="white" />
                                </svg>
                                <span className='travelPriceCardBtn'>buy ticket now</span>
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card1'>
                            <BsSunFill /><span className='travelPriceCardHead'> PREMIUM+TICKET</span>
                            <p className='travelPriceCard'>$1250</p>
                            <p className='travelPriceCardTopic'>Superpass Conference + 1</p>
                            <p className='travelPriceCardPara'>
                                Everything from General Admission and you get full, exclusive access for a year.
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.1458 2.33764C13.1747 1.78611 12.751 1.31558 12.1995 1.28668L3.21184 0.815653C2.66032 0.786748 2.18978 1.21042 2.16088 1.76195C2.13197 2.31347 2.55564 2.78401 3.10717 2.81291L11.0962 3.2316L10.6775 11.2206C10.6486 11.7722 11.0723 12.2427 11.6238 12.2716C12.1753 12.3005 12.6459 11.8768 12.6748 11.3253L13.1458 2.33764ZM1.66913 13.0654L12.8163 3.02845L11.478 1.54216L0.330869 11.5791L1.66913 13.0654Z" fill="#8D36DF" />
                                </svg>
                                <span className='travelPriceCardBtn'>buy ticket now</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Travel