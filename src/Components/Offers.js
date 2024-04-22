import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import backgroundImage from '../img/th1.jpg'
import rightImage from '../img/Boy.png'
import { Link } from 'react-router-dom'

const SpecialOffer = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    height: '80vh',
    color: 'white',
    marginTop: '80px',
  }

  return (
    <div style={containerStyle}>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <div style={{ padding: '20px', margin: '20px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>
                Limited Time Offer
              </h2>
              <h1 style={{ fontSize: '28px', marginTop: '10px' }}>
                Special Edition
              </h1>
              <div style={{ marginTop: '20px', fontSize: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <div style={{ marginTop: '20px', fontSize: '20px' }}>
                <h4>
                  Buy This T-shirt At 20% Discount, Use Code{' '}
                  <strong>OFF20</strong>
                </h4>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <Link to='/Allproducts'>
                <Button variant='light'>Shop Now</Button>
              </Link>
            </div>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <img
              src={rightImage}
              alt='Special Offer'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpecialOffer
