import React, { useState } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  Offcanvas,
  Accordion,
} from 'react-bootstrap'
import {
  FaUser,
  FaRegUser,
  FaBars, // Import FaBars icon
  FaSearch,
  FaMapMarkerAlt,
  FaClipboardCheck,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../CSS/Navbar.css' // Assuming you have a CSS file for your navbar styles
import smartBuyLogo from '../../img/SB-removebg-preview.png'

const categories = [
  'Tablets',
  'Mobiles',
  'Jewelary',
  'Appliances',
  'Laptops',
  'Books',
  'Clothing',
  'Electronics',
]

function HomePage({
  searchActionHandler,
  searchTerm,
  setSearchTerm,
  disableSearch = false,
}) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSearch = async (e) => {
    e.preventDefault()
    searchActionHandler(searchTerm)
    console.log('Searching for:', searchTerm)
  }

  const handleSearchDisplay = () => {
    if (disableSearch) {
      return <div></div>
    } else {
      return (
        <Form className='d-flex' onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type='submit' variant='outline-light'>
            <FaSearch />
          </Button>
        </Form>
      )
    }
  }

  return (
    <>
      <Navbar expand='lg' className='navbar-bg fixed-top'>
        <Container>
          <Button variant='link' className='p-0 me-3' onClick={handleShow}>
            <FaBars style={{ fontSize: '1.5rem', color: 'white' }} />{' '}
            {/* Adjusted style to set color to white */}
          </Button>
          <Navbar.Brand
            as={Link}
            to='/'
            className='navbar-brand custom-brand ms-2'
          >
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
              {handleSearchDisplay()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement='start'
        className='bg-white'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={smartBuyLogo}
              alt='SmartBuy Logo'
              className='logo-image me-2'
            />
            SmartBuy
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <Nav className='flex-column'>
            <Nav.Link
              className='d-flex align-items-center'
              as={Link}
              to='/track-order'
            >
              <FaMapMarkerAlt className='me-2' />
              Track my Order
            </Nav.Link>
            <Nav.Link
              className='d-flex align-items-center'
              as={Link}
              to='/complaint'
            >
              <FaClipboardCheck className='me-2' />
              Launch a Complaint
            </Nav.Link>
          </Nav> */}
          <hr />
          <h6>Categories</h6>
          <Accordion>
            {categories.map((category, index) => (
              <Accordion.Item eventKey={index.toString()} key={category}>
                <Accordion.Header style={{ cursor: 'pointer' }}>
                  <div onClick={handleClose} className='category-text'>
                    {category}
                  </div>
                </Accordion.Header>
              </Accordion.Item>
            ))}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default HomePage
