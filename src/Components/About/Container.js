import React from 'react'
import backgroundImage from '../../img/banner-06.jpg'

const AboutUs = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div
          className='col-md-12 text-center'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjusted background transparency
            color: 'white',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className='d-flex align-items-center justify-content-center h-100'>
            <h1 style={{ fontSize: '4rem' }}>About Us</h1>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
