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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,
                <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
                nec tellus a <br /> odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat
                <br /> consequat auctor eu in elit.
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
