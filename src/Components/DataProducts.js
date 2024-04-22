import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const DataProducts = ({ doesShow, products }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} />)
      } else {
        stars.push(<CiStar key={i} />)
      }
    }
    return stars
  }

  const featuredStyle = {
    width: '100%',
    marginTop: '80px',
    display: doesShow ? 'block' : 'none',
    textAlign: 'center',
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  }

  const cardTitleStyle = {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  const imageStyle = {
    height: '200px', // Set a fixed height for all images
    objectFit: 'cover', // Maintain aspect ratio and crop as necessary
  }

  const productsContainerStyle = {
    marginTop: '20px',
  }

  if (!products || products.length === 0) {
    return <h3>No Data Found!</h3>
  }

  return (
    <Container>
      <Row>
        <h1 style={featuredStyle}>Featured Products</h1>
      </Row>
      <Row style={productsContainerStyle}>
        {products.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/details/${product._id}`} style={linkStyle}>
              <Card className='mb-3'>
                <Card.Img
                  variant='top'
                  src={product.images[0]}
                  style={imageStyle}
                />{' '}
                {/* Apply imageStyle here */}
                <Card.Body>
                  <Card.Title style={cardTitleStyle}>
                    {product.title.slice(0, 20)}
                  </Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Card.Text>Category: {product.category}</Card.Text>
                  <Card.Text>SiteName: {product.site}</Card.Text>
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

export default DataProducts
