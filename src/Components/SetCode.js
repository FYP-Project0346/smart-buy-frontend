import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyForm() {
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Code submitted:', code)
    console.log('New password submitted:', newPassword)
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
