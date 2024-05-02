import React from 'react'
import shippingImage from '../../img/globe-free-img.png'
import qualityImage from '../../img/quality-free-img.png'
import offersImage from '../../img/tag-free-img.png'
import securePaymentsImage from '../../img/lock-free-img.png'

const Features = () => {
  return (
    <div
      className='container '
      style={{ width: '100%', 'margin-top': '100px' }}
    >
      <div className='row justify-content-around'>
        <div className='col-md-3 text-center'>
          <img src={shippingImage} alt='Shipping' className='img-fluid' />
          <h6 className='mt-3'>Pakisani Shipping</h6>
          <p>For more than 100 cites villages and regions</p>
        </div>

        <div className='col-md-3 text-center'>
          <img src={qualityImage} alt='Quality' className='img-fluid' />
          <h6 className='mt-3'>Best Quality</h6>
          <p>Based on your price you get products</p>
        </div>

        <div className='col-md-3 text-center'>
          <img src={offersImage} alt='Offers' className='img-fluid' />
          <h6 className='mt-3'>Best Offers</h6>
          <p>Best Deals are avaliable for user they gets offer</p>
        </div>
        <div className='col-md-3 text-center'>
          <img
            src={securePaymentsImage}
            alt='Secure Payments'
            className='img-fluid'
          />
          <h6 className='mt-3'>Secure Payments</h6>
          <p>User information is secure and not out</p>
        </div>
      </div>
    </div>
  )
}

export default Features
