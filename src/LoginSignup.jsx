import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaPhoneSquareAlt, FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Sign Up" && (
            <>
              <div className="input">
                <FaUser className='Icons' />
                <input type='text' placeholder='Name' />
              </div>
              <div className="input">
                <FaPhoneSquareAlt className='Icons' />
                <input type='number' placeholder='Phone Number' />
              </div>
              <div className="input">
                <FaAddressCard className='Icons' />
                <input type='text' placeholder='Address' />
              </div>
            </>
          )}
          <div className="input">
            <MdEmail className='Icons' />
            <input type='email' placeholder='Email-Id' />
          </div>
          <div className="input">
            <RiLockPasswordFill className='Icons' />
            <input type='password' placeholder='Password' />
          </div>
        </div>

        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit active" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit active" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
