import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import '../CSS/Style.css'
import { login } from '../services/auth'
import { useNavigate } from 'react-router'
import userContext from '../Context/Create-Context'
import { useContext } from 'react'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const profile = useContext(userContext)

  const handleLoginClick = async () => {
    const response = await login(email, password, rememberMe)
    if (response) {
      profile.update(response)
      navigate('/')
    } else {
      alert('Login Failed')
      setErrorMessage('Invalid email or password')
    }
  }

  return (
    <div className='login-container'>
      <div className='background-img'></div>
      <div className='login-form-container'>
        <div className='login-form'>
          <h2>Login</h2>
          <div className='form-group'>
            <div className='icon-input'>
              <FaEnvelope className='input-icon' />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email Address'
                className='form-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='form-group remember-me'>
            <input
              type='checkbox'
              id='remember-me'
              name='remember-me'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor='remember-me'>Remember Me</label>
            <a href='#' className='forgot-password'>
              Forgot Password?
            </a>
          </div>
          <div className='form-group'>
            <button
              onClick={handleLoginClick}
              type='submit'
              className='login-button'
            >
              Login
            </button>
          </div>
          <div className='form-group'>
            <p className='signup-text'>
              Don't have an account? <a href='#'>Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
