import React from 'react'
import './Register.css'

function Register() {
    return (
        <>
            <div className='bgImage'>
                <p className='registerHead1'>
                    Don't miss out on <br />
                    <span className='registerHead2'>
                        this extraordinary event!
                    </span>
                </p>
                <p className='registerPara'>
                    Register now to secure your spot at the San Francisco AI Conference. Experience the thrill of being part of a groundbreaking conference that pushes the boundaries of AI exploration. Together, let's unlock the limitless possibilities of artificial intelligence.
                </p>
                <button className='registerBtn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M12.6087 1.91C12.6087 1.35772 12.161 0.91 11.6087 0.91L2.60871 0.91C2.05642 0.909999 1.60871 1.35771 1.60871 1.91C1.60871 2.46228 2.05642 2.91 2.60871 2.91L10.6087 2.91L10.6087 10.91C10.6087 11.4623 11.0564 11.91 11.6087 11.91C12.161 11.91 12.6087 11.4623 12.6087 10.91L12.6087 1.91ZM1.70921 13.2237L12.3158 2.61711L10.9016 1.20289L0.294999 11.8095L1.70921 13.2237Z" fill="#5603B4" />
                    </svg>
                    <span className='registerBtnText'>
                        Register now
                    </span>
                </button>
            </div>
        </>
    )
}

export default Register