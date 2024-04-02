import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { FaUser, FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import '../CSS/Navbar.css'
import smartBuyLogo from '../img/SB-removebg-preview.png'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchTerm)
  }

  return (
    <>
      <Navbar expand='lg' className='navbar-bg fixed-top'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='navbar-brand custom-brand'>
            <img
              src={smartBuyLogo}
              alt='SmartBuy Logo'
              className='logo-image'
            />
            SmartBuy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto'>
              <Nav.Item>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/contact' className='nav-link'>
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/login'>
                <FaUser />
                <span className='ms-1 d-none d-sm-inline'>Login</span>
              </Nav.Link>
              <Nav.Link as={Link} to='/register'>
                <FaRegUser />
                <span className='ms-1 d-none d-sm-inline'>Register</span>
              </Nav.Link>
              <Form className='d-flex' onSubmit={handleSearch}>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant='outline-light' as={Link} to={`/Allproducts`}>
                  Search
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='hero-section'>
        <Container className='fixed-container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>
                Raining Offers For
                <br /> Hot Summer!
              </h1>
              <h3>25% Off On All Products</h3>
              <div>
                <Button
                  variant='light'
                  className='mx-2'
                  style={{ marginTop: '20px' }}
                >
                  Shop Now
                </Button>
                <Button
                  variant='secondary'
                  className='mx-2'
                  style={{
                    border: '1px solid white',
                    background: 'transparent',
                    marginTop: '20px', // Add margin-top
                  }}
                >
                  Find More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default HomePage
