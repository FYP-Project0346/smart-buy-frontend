import React, { useState } from 'react'
import '../CSS/Register.css'
import { Container } from 'react-bootstrap'
import { register } from '../services/auth'
import { useNavigate } from 'react-router'

function RegisterForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log('Username:', formData.username)
    // console.log('Email:', formData.email)
    // console.log('Password:', formData.password)
    // console.log('Confirm Password:', formData.confirmPassword)

    const data = await register({
      firstname: formData.username,
      lastname: 'nomore',
      email: formData.email,
      password: formData.password,
    })

    if (data) {
      navigate('/')
    } else {
      setErrorMessage('Invalid email or password')
    }
  }

  return (
    <div className='register-container'>
      <div className='background-img'></div>
      <Container className='register-form-container'>
        <div className='register-form'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                className='form-input'
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirm-password' className='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirm-password'
                name='confirmPassword'
                className='form-input'
                value={formData.confirmPassword}
                onChange={handleChange}
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
