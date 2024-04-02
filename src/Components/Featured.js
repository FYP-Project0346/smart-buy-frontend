import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaShippingFast, FaExchangeAlt, FaPhoneVolume } from 'react-icons/fa'

function Featured_Start() {
  let iconSize = 50
  let iconClasses = 'mr-3 primary-color'
  let iconStyles = {}
  return (
    <div
      className='container-fluid pt-5'
      style={{ padding: '20px', margin: '30px' }}
    >
      <div className='row px-xl-5 pb-3'>
        <div className='col-lg-3 col-md-6 col-sm-12 pb-1'>
          <div
            className='d-flex align-items-center border mb-4'
            style={{ padding: '30px' }}
          >
            <AiOutlineCheck
              style={iconStyles}
              size={iconSize}
              className={iconClasses}
            />
            <h5 className='font-weight-semi-bold m-0'>Quality Product</h5>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 pb-1'>
          <div
            className='d-flex align-items-center border mb-4'
            style={{ padding: '30px' }}
          >
            <FaShippingFast
              style={iconStyles}
              size={iconSize}
              className={iconClasses}
            />
            <h5 className='font-weight-semi-bold m-0'>Free Shipping</h5>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 pb-1'>
          <div
            className='d-flex align-items-center border mb-4'
            style={{ padding: '30px' }}
          >
            <FaExchangeAlt
              style={iconStyles}
              size={iconSize}
              className={iconClasses}
            />
            <h5 className='font-weight-semi-bold m-0'>14-Day Return</h5>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 pb-1'>
          <div
            className='d-flex align-items-center border mb-4'
            style={{ padding: '30px' }}
          >
            <FaPhoneVolume
              style={iconStyles}
              size={iconSize}
              className={iconClasses}
            />
            <h5 className='font-weight-semi-bold m-0'>24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured_Start
