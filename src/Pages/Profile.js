import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import '../CSS/Profile.css'

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shippingAddress: '',
    city: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you can add logic to submit the form data to your backend
  }

  return (
    <Container className='profile-container'>
      <h2 className='profile-heading'>User Info</h2>

      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formPhone'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter phone number'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formCity'>
            <Form.Label>City</Form.Label>
            <Form.Select
              name='city'
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value=''>Select city</option>
              <option value='Karachi'>Karachi</option>
              <option value='Sukkur'>Sukkur</option>
              <option value='Larkana'>Larkana</option>
              <option value='Kashmor'>Kashmor</option>
              <option value='Ghotki'>Ghotki</option>
              <option value='Lahore'>Lahore</option>
              <option value='Islamabad'>Islamabad</option>
              <option value='Rawalpindi'>Rawalpindi</option>
              {/* Add more cities here */}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formShippingAddress'>
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Enter shipping address'
            name='shippingAddress'
            value={formData.shippingAddress}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Profile
