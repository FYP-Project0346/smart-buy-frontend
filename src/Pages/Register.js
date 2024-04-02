import React from 'react'
import '../CSS/Register.css' // Import CSS file for styling
import { Container } from 'react-bootstrap' // Import Container component from react-bootstrap

function RegisterForm() {
  return (
    <div className='register-container'>
      <div className='background-img'></div>
      <Container className='register-form-container'>
        <div className='register-form'>
          <h2>Register</h2>
          <form>
            <div className='form-group'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirm-password' className='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirm-password'
                name='confirm-password'
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='register-button'>
                Register
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default RegisterForm
