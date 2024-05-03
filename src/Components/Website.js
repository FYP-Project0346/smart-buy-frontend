import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from '../img/shophive.webp'
import logo2 from '../img/Homeshopping-Logo.jpg'
import logo3 from '../img/priceoye-logo-.png'
import logo4 from '../img/ishopping.png'
import logo5 from '../img/bucket.png'

function LogoCarousel() {
  const images = [logo1, logo2, logo3, logo4, logo5]

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden', marginTop: '50px' }}>
      <Carousel>
        <Carousel.Item>
          <div className='d-flex justify-content-around align-items-center'>
            {images.slice(0, 5).map((image, index) => (
              <img
                key={index}
                className='d-block'
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ maxWidth: '20%' }}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex justify-content-around align-items-center'>
            {images.slice(5).map((image, index) => (
              <img
                key={index}
                className='d-block'
                src={image}
                alt={`Slide ${index + 6}`}
                style={{ maxWidth: '20%' }}
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LogoCarousel
