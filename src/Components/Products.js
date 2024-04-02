import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const FeaturedProducts = ({ doesShow, products }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />)
    }
    if (halfStar) {
      stars.push(<CiStar key={fullStars} />)
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<CiStar key={fullStars + (halfStar ? 1 : 0) + i} />)
    }
    return stars
  }

  const featuredStyle = {
    width: '100%',
    marginTop: '80px',
    display: doesShow ? 'block' : 'none',
  }

  const rowStyle = {
    marginTop: doesShow ? '1.5rem' : '90px',
  }

  const linkStyle = {
    textDecoration: 'none', // Remove text decoration
    color: 'inherit', // Use the default text color
  }

  if (products.length == 0){
    return <h3>No Data Found!</h3>
  }

  return (
    <Container>
      <Row>
        <h2 style={featuredStyle}>Featured Products</h2>{' '}
      </Row>
      <Row style={rowStyle}>
        {products.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/details/${product._id}`} style={linkStyle}>
              {' '}
              {/* Apply style here */}
              <Card className='mb-3'>
                <Card.Img
                  variant='top'
                  src={product.images[0]}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Card.Text>Category: {product.category}</Card.Text>
                  <div>{renderStars(product.rating)}</div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default FeaturedProducts
