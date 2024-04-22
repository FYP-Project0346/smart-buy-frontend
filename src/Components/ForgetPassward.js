import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/ForgetP.css'
import service from '../services/services.js'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const success = await service.requestPasswordReset(email)
    if (success.code == 200) {
      navigate(`/setcode/${email}`)
      // setMessage(`Password reset email sent to ${email}`)
    } else {
      setMessage('Failed to send reset email. Please try again later.')
    }
  }

  return (
    <div className='forgot-password-container'>
      <h2>Forgot Password</h2>

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
        {/* <Link to='/setcode' className='submit-button'> */}
        <button onClick={handleSubmit}>Reset Password</button>
        {/* </Link> */}
      </div>
      {message && <p className='message'>{message}</p>}
      <p className='back-to-login'>
        <Link to='/login'>Back to Login</Link>
      </p>
    </div>
  )
}

export default ForgotPassword
