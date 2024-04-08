import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/ForgetP.css'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Password reset email sent to ${email}`)
  }

  return (
    <div className='forgot-password-container'>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='submit-button'>
            Reset Password
          </button>
        </div>
        {message && <p className='message'>{message}</p>}
        <p className='back-to-login'>
          <Link to='/login'>Back to Login</Link>
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
