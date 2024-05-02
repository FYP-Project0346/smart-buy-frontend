import React from 'react'
import imagePath from '../../img/slide-image-free-img.jpg'

const WhoWeAre = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center'
      style={{ height: '100vh' }}
    >
      <div className='container-fluid mt-4'>
        <div className='row' style={{ height: '600px' }}>
          <div
            className='col-md-6 d-flex align-items-center justify-content-center'
            style={{ paddingRight: '20px' }} // Add spacing between text and image
          >
            <div>
              <h1>Who We Are</h1>
              <p>
                "At SmartBuy, our mission is simple: to make online shopping a
                breeze.
                <br /> With our expertise in frontend and backend development,
                we're
                <br /> dedicated to providing a seamless experience for users.
                By leveraging <br />
                web scraping technology, we ensure that you have all the
                information
                <br /> you need to make informed purchasing decisions. Trust
                SmartBuy to <br />
                streamline your shopping experience and save you time and
                money."
              </p>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-center'>
            <img
              src={imagePath}
              alt='Image'
              style={{ height: '350px', width: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
