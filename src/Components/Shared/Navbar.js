import React from 'react'
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap'
import { FaUser, FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../CSS/Navbar.css'
import smartBuyLogo from '../../img/SB-removebg-preview.png'

function HomePage({ searchActionHandler, searchTerm, setSearchTerm, disableSearch=false }) {
  // const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault()
    searchActionHandler(searchTerm);
    console.log('Searching for:', searchTerm)
  }

  const handleSearchDisplay = ()=>{
    if (disableSearch){
      return <div></div>
    }else{
      return <Form className='d-flex' onSubmit={handleSearch}>
        <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
        {/* <input
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                value={searchTerm}
                onChange={
                  (event) => {
                    setSearchTerm(event.target.value)
                  }
                }
              /> */}
              <Button
               type='submit'
                variant='outline-light'
              >
                Search
              </Button>
      </Form>
    }
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
            SmartBuyy
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
    </>
  )
}

export default HomePage
