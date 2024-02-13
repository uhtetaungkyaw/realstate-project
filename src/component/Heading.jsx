import React from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

const Heading = () => {
    const usenavigate = useNavigate();

    const loginhandler = () => {
        usenavigate('/Login');
    }
    const signuphandler = (e) => {
        usenavigate('/Signup');
    }

    return (
        <>
        
        <div className='l-header l-header__top'>
            <div className='l-wrap-inner'>
                <div className="top-bloc">
                    <div className='logo'>
                        <img src="src/image/Dream.png" alt="Logo" />
                    </div>
                    <div className="address-bloc">
                        <p>Email:  metro@dreamspace.com</p>
                        <p>Call Us: +95 9766189813</p>
                        <button className='btn btn--signin' onClick={loginhandler}>Sign In</button>
                        <button className='btn btn--signup' onClick={signuphandler}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Heading