import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const SignupForm = () => {
  const [user, setUser] = useState();
  const [psw, setPsw] = useState();
  const [email, setEmail] = useState();
  const [cpsw, setCpsw] = useState();
  //const [issubmit, setSubmit] = useState(false);

  const userhandler = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  }

  const pswhandler = (e) => {
    e.preventDefault();
    setPsw(e.target.value);
  }

  const emailhandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const cpswhandler = (e) => {
    e.preventDefault();
    setCpsw(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const props = {
      username: user,
      password: psw,
      email: email,
      comfirm_password: cpsw
    }
    console.log(props);
  }

  return (
    <div className='signup-form' onSubmit={submitHandler}>
      <form action='' className='signup-form__inner'>
        <h2>Sign Up</h2>
        <div className='input-box'>
          <FaUser className='icon' />
          <input type="text" placeholder='Username' required onChange={userhandler} />
        </div>
        <div className='input-box'>
          <IoMdMail className='icon' />
          <input type="email" placeholder='Email Address' required onChange={emailhandler} />
        </div>
        <div className='input-box'>
          <FaLock className='icon' />
          <input type="password" placeholder='Password' required onChange={pswhandler} />
        </div>
        <div className='input-box'>
          <FaLock className='icon' />
          <input type="password" placeholder='Comfirm Password' required onChange={cpswhandler} />
        </div>
        <button type='submit' className='btn btn--signup'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm