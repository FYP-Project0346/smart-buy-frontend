import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const FeaturedProducts = ({ doesShow, products }) => {
  const [selectedStores, setSelectedStores] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  const renderStars = (rating) => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      const isFilled = i < Math.floor(rating)
      stars.push(isFilled ? <FaStar key={i} /> : <CiStar key={i} />)
    }

    return stars
  }

  const handleSearch = () => {
    // Filter products based on selected stores and price range
    const newFilteredProducts = products.filter((product) => {
      const isStoreMatch =
        selectedStores.length === 0 || selectedStores.includes(product.store)
      const isMinPriceMatch =
        !minPrice || parseFloat(product.price) >= parseFloat(minPrice)
      const isMaxPriceMatch =
        !maxPrice || parseFloat(product.price) <= parseFloat(maxPrice)

      return isStoreMatch && isMinPriceMatch && isMaxPriceMatch
    })

    setFilteredProducts(newFilteredProducts)
  }

  return (
    <Container>
      <Row>
        <h2 style={{ display: doesShow ? 'block' : 'none' }}>
          Featured Products
        </h2>
      </Row>
      <Row>
        <Col xs={12} md={3}>
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
                      selectedStores.filter(
                        (selectedStore) => selectedStore !== e.target.value
                      )
                    )
                  }
                }}
              />
            )
          )}
          <h4>By Price</h4>
          <Form.Group className='d-flex align-items-center'>
            <Form.Control
              type='number'
              placeholder='Min'
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className='mr-2'
            />
            <Form.Control
              type='number'
              placeholder='Max'
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' onClick={handleSearch}>
            Search
          </Button>
        </Col>

        <Col xs={12} md={9}>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={4}>
                <Link
                  to={`/details/${product._id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Card className='mb-3'>
                    <Card.Img variant='top' src={product.images[0]} />
                    <Card.Body>
                      <Card.Title>{product.title.slice(0, 20)}</Card.Title>
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
