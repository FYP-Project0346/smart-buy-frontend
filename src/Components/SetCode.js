import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import service from '../services/services.js'
import { useParams } from 'react-router-dom'

function MyForm() {
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')
  const { email } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.')
      return
    }

    const success = await service.resetPasswordWithCode(
      email,
      code,
      newPassword
    )
    if (success) {
      setMessage('Password reset successfully.')
      setErrorMessage('')
    } else {
      setErrorMessage('Could not reset password. Please try again later.')
    }
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h1 className='mt-5 mb-4'>Set Password</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='codeInput'>Code:</label>
              <input
                type='text'
                className='form-control'
                id='codeInput'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder='Enter code here'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='newPasswordInput'>New Password:</label>
              <input
                type='password'
                className='form-control'
                id='newPasswordInput'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='Enter new password here'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirmPasswordInput'>Confirm Password:</label>
              <input
                type='password'
                className='form-control'
                id='ConfirmPasswordInput'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Enter Confirm password '
                required
              />
            </div>
            {errorMessage && <p className='text-danger'>{errorMessage}</p>}
            {message && (
              <p className='text-success' style={{ color: 'green' }}>
                {message}
              </p>
            )}
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyForm
