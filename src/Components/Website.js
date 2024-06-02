import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from '../img/shophive.webp'
import logo2 from '../img/Homeshopping-Logo.jpg'
import logo3 from '../img/priceoye-logo-.png'
import logo4 from '../img/ishopping.png'
import logo5 from '../img/bucket.png'

function LogoCarousel() {
  const images = [
    { src: logo1, url: 'https://www.shophive.com' },
    { src: logo2, url: 'https://www.homeshopping.pk' },
    { src: logo3, url: 'https://www.priceoye.pk' },
    { src: logo4, url: 'https://www.ishopping.pk' },
    { src: logo5, url: 'https://www.bucket.pk' },
  ]

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden', marginTop: '50px' }}>
      <div className='d-flex justify-content-around align-items-center'>
        {images.map((image, index) => (
          <a
            href={image.url}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='d-block'
              src={image.src}
              alt={`Logo ${index + 1}`}
              style={{ width: '250px', height: 'auto' }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel
