import React, { useState } from 'react'
import { testPriceTracking } from '../services/price_tracker_service'
import { Form, Button, Container } from 'react-bootstrap'
import {testPriceTracking} from "../services/price_tracker_service" 

function TestingPanel() {
  const [formData, setFormData] = useState({
    textInput: '',
    dealOption: 'deal',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = formData.textInput
    const status = formData.dealOption == 'deal'

    await testPriceTracking(id, status)
    console.log('Product Updated')
    alert('Product UPdated')
<<<<<<< HEAD
=======
    // console.log('first', id)
    // console.log('second', status)
>>>>>>> 0cb9e6f429348194308f0580af0b3f086119abec
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Container style={{ width: '400px' }}>
        <h1 className='text-center'>Deal or No Deal</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='textInput'>
            <Form.Label>Text Input</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter text'
              name='textInput'
              value={formData.textInput}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId='dealOption'>
            <Form.Label>Deal Option</Form.Label>
            <Form.Control
              as='select'
              name='dealOption'
              value={formData.dealOption}
              onChange={handleChange}
            >
              <option value='deal'>Deal</option>
              <option value='noDeal'>No Deal</option>
            </Form.Control>
          </Form.Group>

          <Button variant='primary' type='submit' style={{ marginTop: '10px' }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default TestingPanel
