import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import '../CSS/Style.css'
import { login } from '../services/auth'
import { useNavigate, Link } from 'react-router-dom'
import userContext from '../Context/Create-Context'
import { useContext } from 'react'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const profile = useContext(userContext)

  const handleLoginClick = async () => {
    if (!email || !password) {
      setErrorMessage('Please enter both email and password')
      return
    }

    const response = await login(email, password, rememberMe)
    if (response) {
      profile.update(response)
      navigate('/')
    } else {
      alert('Login Failed')
      // setErrorMessage('Invalid email or password')
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
                style={{ color: 'white' }}
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
            <Link to='/forgot-password' className='forgot-password'>
              Forgot Password?
            </Link>
          </div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
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
              Don't have an account? <Link to='/register'>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
