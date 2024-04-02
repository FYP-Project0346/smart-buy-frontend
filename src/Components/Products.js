import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const FeaturedProducts = ({ doesShow, products }) => {
  const [selectedStores, setSelectedStores] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

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

  const filteredProducts = products.filter((product) => {
    const isStoreMatch =
      selectedStores.length === 0 || selectedStores.includes(product.store)
    const isMinPriceMatch =
      !minPrice ||
      parseFloat(product.price.substring(1)) >= parseFloat(minPrice)
    const isMaxPriceMatch =
      !maxPrice ||
      parseFloat(product.price.substring(1)) <= parseFloat(maxPrice)

    return isStoreMatch && isMinPriceMatch && isMaxPriceMatch
  })

  const featuredStyle = {
    width: '100%',
    marginTop: '80px',
    display: doesShow ? 'block' : 'none',
  }

  const rowStyle = {
    marginTop: doesShow ? '1.5rem' : '90px',
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

  const filterContainerStyle = {
    borderRight: '1px solid #ccc',
    paddingRight: '20px',
    marginBottom: '20px',
  }

  if (products.length === 0) {
    return <h3>No Data Found!</h3>
  }

  return (
    <Container>
      <Row>
        <h2 style={featuredStyle}>Featured Products</h2>
      </Row>
      <Row style={{ marginTop: doesShow ? '1.5rem' : '90px' }}>
        <Col xs={12} md={3} style={filterContainerStyle}>
          <h4>Stores</h4>
          {['Shophive', 'Mega.pk', 'Priceoye', 'Ishopping', 'Qmart'].map(
            (store) => (
              <Form.Check
                key={store}
                type='checkbox'
                label={store}
                value={store}
                checked={selectedStores.includes(store)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedStores([...selectedStores, e.target.value])
                  } else {
                    setSelectedStores(
                      selectedStores.filter((store) => store !== e.target.value)
                    )
                  }
                }}
              />
            )
          )}
          <h4 style={featuredStyle}>By Price</h4>
          <Form.Group className='d-flex align-items-center'>
            <span className='mr-2'></span>
            <Form.Control
              type='number'
              placeholder=' min '
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className='mr-2'
            />
            <span className='mr-2'></span>
            <Form.Control
              type='number'
              placeholder='max '
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </Form.Group>
          <Button
            variant='primary'
            onClick={() => {
              /* Perform search/filtering */
            }}
          >
            Search
          </Button>
        </Col>
        <Col xs={12} md={9}>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={4}>
                <Link to={`/details/${product._id}`} style={linkStyle}>
                  <Card className='mb-3'>
                    <Card.Img variant='top' src={product.images[0]} />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        {product.title.slice(0, 20)}
                      </Card.Title>
                      <Card.Text>Price: {product.price}</Card.Text>
                      <Card.Text>Category: {product.category}</Card.Text>
                      <div>{renderStars(product.rating)}</div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default FeaturedProducts
