import React from 'react'
import smartBuyLogo from '../../img/SB-removebg-preview.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa'
import '../../CSS/Style.css'
function Footer() {
  return (
    <div className='container-fluid bg-white text-dark mt-5 pt-5'>
      <div className='row px-xl-5 pt-5 '>
        <div className='col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5'>
          <a href='' className='text-decoration-none d-flex align-items-center'>
            <img
              src={smartBuyLogo}
              alt='SmartBuy Logo'
              className='logo-image mr-2'
            />
            <h1 className='mb-0 display-5 font-weight-semi-bold text-dark'>
              SmartBuy
            </h1>
          </a>
          <div className='d-flex flex-column'>
            <p className='mb-4'>The best look anytime, anywhere.</p>
            <p className='mb-2'>
              <i className='fa fa-map-marker-alt text-primary mr-3'></i>
              123 Street, Islamabad, Pakistan
            </p>
            <p className='mb-2'>
              <i className='fa fa-envelope text-primary mr-3'></i>
              info@example.com
            </p>
            <p className='mb-0'>
              <i className='fa fa-phone-alt text-primary mr-3'></i>
              +92 345 67890
            </p>
          </div>
        </div>

        <div className='col-lg-8 col-md-12'>
          <div className='row'>
            <div className='col-md-4 mb-5'>
              <h5 className='font-weight-bold text-dark mb-4'>Quick Links</h5>
              <div className='d-flex flex-column justify-content-start'>
                <a className='text-dark mb-2' href='index.html'>
                  <i className='fa fa-angle-right mr-2'></i>Home
                </a>
                <a class='text-dark mb-2' href='shop.html'>
                  <i class='fa fa-angle-right mr-2'></i>Our Shop
                </a>
                <a class='text-dark mb-2' href='detail.html'>
                  <i class='fa fa-angle-right mr-2'></i>Shop Detail
                </a>
                <a class='text-dark mb-2' href='cart.html'>
                  <i class='fa fa-angle-right mr-2'></i>Shopping Cart
                </a>
                <a class='text-dark mb-2' href='checkout.html'>
                  <i class='fa fa-angle-right mr-2'></i>Checkout
                </a>
                <a class='text-dark' href='contact.html'>
                  <i class='fa fa-angle-right mr-2'></i>Contact Us
                </a>
              </div>
            </div>
            <div class='col-md-4 mb-5'>
              <h5 class='font-weight-bold text-dark mb-4'>Quick Links</h5>
              <div class='d-flex flex-column justify-content-start'>
                <a class='text-dark mb-2' href='index.html'>
                  <i class='fa fa-angle-right mr-2'></i>Home
                </a>
                <a class='text-dark mb-2' href='shop.html'>
                  <i class='fa fa-angle-right mr-2'></i>Our Shop
                </a>
                <a class='text-dark mb-2' href='detail.html'>
                  <i class='fa fa-angle-right mr-2'></i>Shop Detail
                </a>
                <a class='text-dark mb-2' href='cart.html'>
                  <i class='fa fa-angle-right mr-2'></i>Shopping Cart
                </a>
                <a class='text-dark mb-2' href='checkout.html'>
                  <i class='fa fa-angle-right mr-2'></i>Checkout
                </a>
                <a class='text-dark' href='contact.html'>
                  <i class='fa fa-angle-right mr-2'></i>Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row border-top border-light mx-xl-5 py-4'>
        <div className='col-md-6 px-xl-0'>
          <p className='mb-md-0 text-center text-md-left text-dark'>
            &copy;{' '}
            <a className='text-dark font-weight-semi-bold' href='#'>
              Your Site Name
            </a>
            . All Rights Reserved. Designed by{' '}
            <a
              className='text-dark font-weight-semi-bold'
              href='https://htmlcodex.com'
            >
              Sukkur IBA 20F-4
            </a>
            <br />
          </p>
        </div>
        <div className='col-md-6 px-xl-0 text-center text-md-right'>
          <FaFacebook className='social-icon mx-2' size='2em' />
          <FaInstagram className='social-icon mx-2' size='2em' />
          <FaLinkedin className='social-icon mx-2' size='2em' />
          <FaTwitter className='social-icon mx-2' size='2em' />
          <FaYoutube className='social-icon mx-2' size='2em' />
          <FaGoogle className='social-icon mx-2' size='2em' />
          <img className='img-fluid' src='img/payments.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer
