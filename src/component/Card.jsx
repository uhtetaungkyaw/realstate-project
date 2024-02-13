import React from 'react'
import Home from '../../src/image/home.jpeg';
import { FaLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";

const Card = (props) => {

  const { id, postDate, location, title, price, details, type } = props
  return (
    <div>
        <div className="card">
          <div className="card-inner">
            <div className="card-img">
              <img src={Home} alt="img1" className='home-img' />
            </div>
            <div className="card-txt">
              <div className='card-txt__stats'>
                <p>Id {id}</p>
                <p>Post on {postDate}</p>
              </div>
              <h3>{title}</h3>

              <div className="card-description">
                <div className="card-description-box">
                  <FaLocationDot />
                  <p>{location}</p>
                </div>
                <div className="card-description-box">
                  <IoHome />
                  <p>{type}</p>
                </div>
                <div className="card-description-box">
                  <FaCircleInfo />
                  <p>{details}</p>
                </div>
                <div className="card-description-box card-description-box--price">
                  <IoMdPricetags />
                  <p>Price</p>
                  <p>{price}</p>
                </div>
              </div>

            </div>
            <div className="card-btn">
              <button className='btn btn--details'>View Details</button>
              <button className='btn btn--appoint'>Appointment</button>
            </div>
 
          </div>
        </div>

        {/* <div className="card1">
          <div className="card-inner">
            <div className="card-img">
              <img src={Home} alt="img1" className='home-img' />

            </div>
            <div className="card-txt">
              <div className='card-txt__stats'>
                <p>Id {id}</p>
                <p>Post on {postDate}</p>
              </div>
              <h3>{title}</h3>

              <div className="card-description">
                <div className="card-description-box">
                  <FaLocationDot />
                  <p>{location}</p>
                </div>
                <div className="card-description-box">
                  <IoHome />
                  <p>{type}</p>
                </div>
                <div className="card-description-box">
                  <FaCircleInfo />
                  <p>{details}</p>
                </div>
                <div className="card-description-box card-description-box--price">
                  <IoMdPricetags />
                  <p>Price</p>
                  <p>{price}</p>
                </div>
              </div>

            </div>
            <div className="card-btn">
              <button className='btn btn--details'>View Details</button>
              <button className='btn btn--appoint'>Appointment</button>
            </div>

          </div>
        </div> */}
      
    </div>






  )
}

export default Card
