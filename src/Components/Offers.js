import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import backgroundImage from '../img/banner-03.jpg' // Import your background image

const SpecialOffer = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    width: '100vw',
    height: '100vh',
    color: 'white',
    marginTop: '80px',
  }

  return (
    <div style={containerStyle}>
      <Container>
        <Row className='align-items-center'>
          {' '}
          {/* Align items vertically */}
          <Col md={6}>
            <div style={{ padding: '20px', margin: '20px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>
                {' '}
                {/* Increased font size of h1 to 32px */}
                Limited Time Offer
              </h2>
              <h1 style={{ fontSize: '24px', marginTop: '10px' }}>
                {' '}
                {/* Increased font size of h3 to 24px */}
                Special Edition
              </h1>
              <div style={{ marginTop: '20px', fontSize: '18px' }}>
                {' '}
                {/* Increased font size to 18px */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <div style={{ marginTop: '20px', fontSize: '18px' }}>
                {' '}
                {/* Increased font size to 18px */}
                <h4>
                  Buy This T-shirt At 20% Discount, Use Code{' '}
                  <strong>OFF20</strong>
                </h4>
              </div>
            </div>
            <Col md={6} className='d-flex justify-content-center'>
              {' '}
              {/* Center the button */}
              <Button variant='light'>Shop Now</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpecialOffer
