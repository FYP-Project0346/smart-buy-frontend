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

    // Check if any field is empty
    for (const key in formData) {
      if (!formData[key]) {
        setErrorMessage(`Please enter your ${key}.`)
        return
      }
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    const data = await register({
      firstname: formData.username,
      lastname: 'nomore',
      email: formData.email,
      password: formData.password,
    })
    console.log(data)
    if (data.code === 200) {
      navigate('/')
    } else {
      setErrorMessage('Invalid email or password')
    }
  }

  return (
    <div className='register-container'>
      <div className='background-img'></div>
      <Container
        className='register-form-container'
        style={{ maxWidth: '450px', padding: '20px' }}
      >
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
                style={{ color: 'white' }}
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
                style={{ color: 'white' }}
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
                style={{ color: 'white' }}
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
                style={{ color: 'white' }}
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='register-button'>
                Register
              </button>
            </div>
            {errorMessage && (
              <div className='error-message'>{errorMessage}</div>
            )}
          </form>
        </div>
      </Container>
    </div>
  )
}

export default RegisterForm
