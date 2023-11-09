import React from 'react'
import './FAQ.css'
import faqImg1 from '../../../images/faqImg1.png'
import faqImg2 from '../../../images/faqImg2.png'
import faqImg3 from '../../../images/faqImg3.png'
import faqImg4 from '../../../images/faqImg4.png'
import faqCardImgIcon from '../../../images/faqCardImgIcon.png'
import faqCardlogo1 from '../../../images/faqCardlogo1.png'
import faqCardlogo2 from '../../../images/faqCardlogo2.png'
import faqCardlogo3 from '../../../images/faqCardlogo3.png'
import faqCardlogo4 from '../../../images/faqCardlogo4.png'


function FAQ() {
    return (
        <>
            <div id='faq'>
                <div>
                    <p className='faqHead1'>what we offer</p>
                    <p className='faqHead2'>Why Attend the San Francisco<br /><span className='faqHead3'>AI Conference?</span></p>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div style={{ position: 'relative' }}>
                            <img src={faqImg1} alt='FAQ Image 1' style={{ width: '100%', height: 'auto' }} />
                            <img src={faqCardImgIcon} alt='Icon' style={{ position: 'absolute', bottom: 0, left: 0 }} />
                            <img src={faqCardlogo1} alt='FAQ Card Icon 1' style={{ position: 'absolute', bottom: 10, left: 10 }} />
                        </div>
                        <p className='faqCardHead'>Unparalleled Knowledge</p>
                        <p className='faqCardPara'>
                            Gain a comprehensive understanding of AI's latest trends, advancements, and challenges. Our diverse sessions will cover cutting-edge topics beyond the conventional, ensuring you stay one step ahead in this rapidly evolving field.
                        </p>
                    </div>
                    <div className='card'>
                        <div style={{ position: 'relative' }}>
                            <img src={faqImg2} alt='FAQ Image 1' style={{ width: '100%', height: 'auto' }} />
                            <img src={faqCardImgIcon} alt='Icon' style={{ position: 'absolute', bottom: 0, left: 0 }} />
                            <img src={faqCardlogo2} alt='FAQ Card Icon 1' style={{ position: 'absolute', bottom: 10, left: 10 }} />
                        </div>
                        <p className='faqCardHead'>Networking Opportunities</p>
                        <p className='faqCardPara'>
                            Connect with industry leaders, influential professionals, and fellow AI enthusiasts. Forge meaningful connections that can shape your career and open doors to new collaborations and partnerships.
                        </p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div style={{ position: 'relative' }}>
                            <img src={faqImg3} alt='FAQ Image 1' style={{ width: '100%', height: 'auto' }} />
                            <img src={faqCardImgIcon} alt='Icon' style={{ position: 'absolute', bottom: 0, left: 0 }} />
                            <img src={faqCardlogo3} alt='FAQ Card Icon 1' style={{ position: 'absolute', bottom: 10, left: 10 }} />
                        </div>
                        <p className='faqCardHead'>Career Development</p>
                        <p className='faqCardPara'>
                            Discover exciting career opportunities in the realm of AI. Whether you're a seasoned professional or just starting your journey, our conference offers valuable insights and guidance to navigate the AI landscape and accelerate your professional growth.
                        </p>
                    </div>
                    <div className='card'>
                        <div style={{ position: 'relative' }}>
                            <img src={faqImg4} alt='FAQ Image 1' style={{ width: '100%', height: 'auto' }} />
                            <img src={faqCardImgIcon} alt='Icon' style={{ position: 'absolute', bottom: 0, left: 0 }} />
                            <img src={faqCardlogo4} alt='FAQ Card Icon 1' style={{ position: 'absolute', bottom: 10, left: 10 }} />
                        </div>
                        <p className='faqCardHead'>Engaging Discussions</p>
                        <p className='faqCardPara'>
                            Engage in dynamic conversations and thought-provoking discussions with like-minded individuals who share your passion for AI. Explore new perspectives, exchange ideas, and contribute to shaping the future of this transformative technology.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ