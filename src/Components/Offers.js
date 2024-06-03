import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import backgroundImage from '../img/th1.jpg'
import rightImage from '../img/Boy.png'
import { Link } from 'react-router-dom'
import shop from '../img/shop.jpg'

const SpecialOffer = () => {
  const containerStyle = {
    backgroundImage: `url(${shop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    height: '80vh',
    color: 'black',
    marginTop: '80px',
  }

  return (
    <div style={containerStyle}>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <div style={{ padding: '20px', margin: '20px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>
                Streamlined Shopping Experience
              </h2>
              <div style={{ marginTop: '20px', fontSize: '20px' }}>
                Shop smarter with SmartBuy's intuitive price comparison tool.
                Find the best deals and save big on your favorite products
              </div>
              <div style={{ marginTop: '20px', fontSize: '20px' }}>
                <h4>Fashion Finesse: Style Staples for Every Wardrobe</h4>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <Link to='/Allproducts/laptop'>
                <Button variant='light'>Shop Now</Button>
              </Link>
            </div>
          </Col>
          {/* <Col md={6} className='d-flex justify-content-center'>
            <div
              style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}
            >
              <img src={rightImage} alt='Special Offer' className='img-fluid' />
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default SpecialOffer
