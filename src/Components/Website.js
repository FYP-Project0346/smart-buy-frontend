import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from '../img/shophive.webp'
import logo2 from '../img/mega.jpg'
import logo3 from '../img/priceoye-logo.png'
import logo4 from '../img/ishopping.png'
import logo5 from '../img/Vmart.webp'

function LogoCarousel() {
  const images = [logo1, logo2, logo3, logo4, logo5]

  return (
    <Carousel style={{ width: '100%', 'margin-top': '50px' }}>
      {' '}
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
  )
}

export default LogoCarousel
