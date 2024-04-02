import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import '../CSS/Style.css'

function Login() {
  return (
    <div className='login-container'>
      <div className='background-img'></div>
      <div className='login-form-container'>
        <div className='login-form'>
          <h2>Login</h2>
          <form>
            <div className='form-group'>
              <div className='icon-input'>
                <FaEnvelope className='input-icon' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  className='form-input'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='icon-input'>
                <FaLock className='input-icon' />
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  className='form-input'
                />
              </div>
            </div>
            <div className='form-group remember-me'>
              <input type='checkbox' id='remember-me' name='remember-me' />
              <label htmlFor='remember-me'>Remember Me</label>
              <a href='#' className='forgot-password'>
                Forgot Password?
              </a>
            </div>
            <div className='form-group'>
              <button type='submit' className='login-button'>
                Login
              </button>
            </div>
            <div className='form-group'>
              <p className='signup-text'>
                Don't have an account? <a href='#'>Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
