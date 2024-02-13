import React, { useState } from 'react'
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Loginform = () => {
  const [user, setUser] = useState();
  const [psw, setPsw] = useState();
  const userhandler = (e) => {

      setUser(e.target.value);
  }

  const pswhandler = (e) => {
    
    setPsw(e.target.value);
}

const submitHandler = (e) => {
  e.preventDefault();
  const props = {
    username: user,
    password: psw
  }
  console.log(props);
}

  return (
    <div className='form' onSubmit={submitHandler}>
        <form action='' className='form__inner'>
            <h2>Login</h2>
            <div className='input-box'>
                <FaUser className='icon' />
                <input type="text" placeholder='Username or Email Address' required onChange={userhandler}/>
            </div>
            <div className='input-box'>
                <FaLock className='icon'/>
                <input type="password" placeholder='Password' required onChange={pswhandler}/>
            </div>
            <div className="form__fp">
              <label><input type="checkbox" name="keeplogin" id="keeplogin" /> Keep Me Loged In</label>
              <div><Link to='/'>Forgot Password?</Link></div>
            </div>
            <div className='form__signup'>
              <label>Don't have an account? <Link to='/Signup'> Sign Up </Link> here</label>
              <button type='submit' className='btn btn--login'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Loginform