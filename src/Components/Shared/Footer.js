import React from 'react'
import smartBuyLogo from '../../img/SB-removebg-preview.png'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-white text-dark mt-5 pt-5'>
      <footer className=' shadow py-5'>
        <Container className='px-4'>
          {/* Footer Content */}
          <Row className='justify-content-between'>
            {/* Column 1 */}
            <Col xs={12} md={4} className='mb-4 mb-md-0'>
              <Link
                to='/'
                className='text-decoration-none d-flex align-items-center'
              >
                <img
                  src={smartBuyLogo}
                  alt='SmartBuy Logo'
                  className='logo-image mr-1'
                />
                <h1 className='mb-0 display-5 font-weight-semi-bold text-dark'>
                  SmartBuy
                </h1>
              </Link>
              <p className='my-2' style={{ maxWidth: '360px' }}>
                "SmartBuy: Your one-stop destination for comparing product
                prices across various websites. Find the best deals and make
                smarter purchases hassle-free!"
              </p>
            </Col>
            {/* Column 2 */}
            <Col xs={6} md={2} className='mb-4 mb-md-0'>
              <h5 className='mb-4' style={{ fontWeight: '600' }}>
                Details
              </h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/about' className='text-dark'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='text-dark'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to='/Allproducts/laptop' className='text-dark'>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to='/' className='text-dark'>
                    Home
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Column 3 */}
            <Col xs={6} md={2} className='mb-4 mb-md-0'>
              <h5 className='mb-4' style={{ fontWeight: '600' }}>
                Help
              </h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/register' className='text-dark'>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to='/login' className='text-dark'>
                    Sign In
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Column 4 */}
            <Col xs={6} md={2} className='mb-4 mb-md-0'>
              <h5 className='mb-4' style={{ fontWeight: '600' }}>
                Contact
              </h5>
              <p className='mb-2'>
                <i className='fa fa-map-marker-alt text-primary mr-3'></i>Sukkur
                IBA Airport Road
              </p>
              <p className='mb-2'>
                <i className='fa fa-envelope text-primary mr-3'></i>
                abrehman0346@gmail.com
              </p>
              <p className='mb-0'>
                <i className='fa fa-phone-alt text-primary mr-3'></i>+92 303
                3372287
              </p>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <div className='row border-top border-light mx-xl-5 py-4'>
            {/* Column 1 */}
            <div className='col-md-6 px-xl-0 mt-4'>
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
            {/* Column 2 */}
            <div className='col-md-6 px-xl-0 text-center text-md-right'>
              <h6>Follow us</h6>
              <FaFacebook className='social-icon mx-2' size='2em' />
              <FaInstagram className='social-icon mx-2' size='2em' />
              <FaLinkedin className='social-icon mx-2' size='2em' />
              <FaTwitter className='social-icon mx-2' size='2em' />
              <FaYoutube className='social-icon mx-2' size='2em' />
              <FaGoogle className='social-icon mx-2' size='2em' />
              <img className='img-fluid' src='img/payments.png' alt='' />
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
