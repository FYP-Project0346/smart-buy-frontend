import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

const useHover = () => {
  const [hovered, setHovered] = useState(false)
  const animationProps = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered
      ? '0 4px 8px rgba(0, 0, 0, 0.2)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)',
  })

  return {
    hovered,
    setHovered,
    animationProps,
  }
}

const ProductCard = ({ product }) => {
  const { hovered, setHovered, animationProps } = useHover()

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  }

  const cardTitleStyle = {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    fontSize: '1.1em',
  }

  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
  }

  const cardStyle = {
    transition: 'transform 0.2s, box-shadow 0.2s',
  }

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

  return (
    <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
      <Link to={`/details/${product._id}`} style={linkStyle}>
        <animated.div
          style={{ ...cardStyle, ...animationProps }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Card className='mb-3'>
            <Card.Img
              variant='top'
              src={product.images[0]}
              style={imageStyle}
            />
            <Card.Body>
              <Card.Title style={cardTitleStyle}>
                {product.title.slice(0, 20)}
              </Card.Title>
              <Card.Text>Price: {product.price}</Card.Text>
              <Card.Text>Category: {product.category}</Card.Text>
              <Card.Text>SiteName: {product.site}</Card.Text>
              <div>{renderStars(product.ratings)}</div>
            </Card.Body>
          </Card>
        </animated.div>
      </Link>
    </Col>
  )
}

const DataProducts = ({ doesShow, products }) => {
  const featuredStyle = {
    width: '100%',
    marginTop: '80px',
    display: doesShow ? 'block' : 'none',
    textAlign: 'center',
  }

  const productsContainerStyle = {
    marginTop: '20px',
  }

  return (
    <Container>
      <Row>
        <h1 style={featuredStyle}>Featured Products</h1>
      </Row>
      <Row style={productsContainerStyle}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  )
}

export default DataProducts
