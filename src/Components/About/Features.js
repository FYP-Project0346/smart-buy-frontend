import React from 'react'
import shippingImage from '../../img/globe-free-img.png'
import qualityImage from '../../img/quality-free-img.png'
import offersImage from '../../img/tag-free-img.png'

const Features = () => {
  return (
    <div className='container' style={{ width: '100%', marginTop: '100px' }}>
      <div className='row justify-content-around'>
        <div className='col-md-4 text-center mb-4'>
          <img src={shippingImage} alt='Shipping' className='img-fluid' />
          <h6 className='mt-3'>Pakistani Shipping</h6>
          <p>For more than 100 cities, villages, and regions</p>
        </div>

        <div className='col-md-4 text-center mb-4'>
          <img src={qualityImage} alt='Quality' className='img-fluid' />
          <h6 className='mt-3'>Best Quality</h6>
          <p>Based on your price you get products</p>
        </div>

        <div className='col-md-4 text-center mb-4'>
          <img src={offersImage} alt='Offers' className='img-fluid' />
          <h6 className='mt-3'>Best Offers</h6>
          <p>Best deals are available for users to get offers</p>
        </div>
      </div>
    </div>
  )
}

export default Features
