import React from 'react'
import { IconContext } from "react-icons"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutubeSquare } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Value } from 'sass'
// install <npm install @react-icons/all-files --save>
const Footer = () => {
  return (

    <>
      <div className="l-footer">
        <div className="l-wrap-inner">
          <div className="l-footer l-footer__wrap">
            <div className="footer-logo">
              <div className="footer-logo__logo">
                <img src="src/image/Dream.png" alt="" />
              </div>
              <p>Dusi aute iruer dolor inasfa reperehenderit in volupdate velit esse</p>
              <div className="footer-logo__icons">
                <IconContext.Provider value={{ size: "30px" }}>
                  <FaFacebookSquare />
                  <FaInstagramSquare />
                  <FaLinkedin />
                  <FaYoutubeSquare />
                </IconContext.Provider>
              </div>
            </div>
            <div className="footer-link">
              {/* navigation */}
              <ul className='footer-link__bloc'>
                <li><h4>Navigaion</h4></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>contact</Link></li>
                <li><Link to='/Appointment'>Appointment</Link></li>
              </ul>

              {/* service */}
              <ul className='footer-link__bloc'>
                <li><h4>Service</h4></li>
                <li><Link to='/'>Drone Mapping</Link></li>
                <li><Link to='/'>Real Estate</Link></li>
                <li><Link to='/Contact'>Commercial</Link></li>
                <li><Link to='/Appointment'>Contruction</Link></li>
              </ul>

              {/* support */}
              <ul className='footer-link__bloc'>
                <li><h4>Support</h4></li>
                <li><Link to='/'>Drone Mapping</Link></li>
                <li><Link to='/'>Real Estate</Link></li>
                <li><Link to='/Contact'>Commercial</Link></li>
                <li><Link to='/Appointment'>Contruction</Link></li>
              </ul>

              {/* contact us */}
              <ul className='footer-link__bloc'>
                <li><h4>Contact Us</h4></li>
                <li><Link to='/'>Drone Mapping</Link></li>
                <li><Link to='/'>contact@carwash.com</Link></li>
                <li><Link to='/'>10 (87) 738-3940</Link></li>
              </ul>
            </div>
          </div>
          <address>&copy2024 All right reserved.</address>
        </div>
      </div>
    </>
  )
}

export default Footer