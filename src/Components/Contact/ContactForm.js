import React, { Component } from 'react'
import services from '../../services/services'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    islogin: false,
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    // Check if all required fields are filled out
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.message === '' ||
      this.state.subject === ''
    ) {
      alert('Please fill out all required fields')
      return
    }

    const currentDate = new Date().toLocaleString() // Get current date and time
    const formData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      currentDate: currentDate,
      islogin: this.state.islogin,
    }

    try {
      const isSuccess = await services.saveMessage(formData)
      if (isSuccess) {
        alert('Message saved successfully')
      } else {
        alert('Failed to save message')
      }
    } catch (error) {
      console.error('Error saving message:', error)
      alert('Error saving message')
    }
  }

  render() {
    const { name, email, subject, message } = this.state

    return (
      <div
        className='container-fluid pt-5'
        style={{ width: '100%', marginTop: '40px' }}
      >
        <div className='text-center mb-4'>
          <h2 className='section-title px-5'>
            <span className='px-2'>Contact For Any Queries</span>
          </h2>
        </div>
        <div
          className='row px-xl-5'
          style={{ width: '100%', marginTop: '40px' }}
        >
          <div className='col-lg-7 mb-5'>
            <div className='contact-form'>
              <div id='success'></div>
              <form
                name='sentMessage'
                id='contactForm'
                noValidate='novalidate'
                onSubmit={this.handleSubmit}
              >
                <div className='control-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    value={name}
                    onChange={this.handleInputChange}
                    required='required'
                    data-validation-required-message='Please enter your name'
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div className='control-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={this.handleInputChange}
                    required='required'
                    data-validation-required-message='Please enter your email'
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div className='control-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='subject'
                    name='subject'
                    placeholder='Subject'
                    value={subject}
                    onChange={this.handleInputChange}
                    required='required'
                    data-validation-required-message='Please enter a subject'
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div className='control-group'>
                  <textarea
                    className='form-control'
                    rows='6'
                    id='message'
                    name='message'
                    placeholder='Message'
                    value={message}
                    onChange={this.handleInputChange}
                    required='required'
                    data-validation-required-message='Please enter your message'
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div>
                  <button
                    className='py-2 px-4'
                    type='submit'
                    id='sendMessageButton'
                    style={{ backgroundColor: '#007BFF', color: '#FFFFFF' }} // Replace '#007BFF' with your primary color
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-5 mb-5'>
            <h5 className='font-weight-semi-bold mb-3'>Get In Touch</h5>
            <p>
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
              duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et
              erat clita ipsum justo sed.
            </p>
            <div className='d-flex flex-column mb-3'>
              <h5 className='font-weight-semi-bold mb-3'>Store 1</h5>
              <p className='mb-2'>
                <i className='fa fa-map-marker-alt text-primary mr-3'></i>123
                Street, Islamabad, Pakistan
              </p>
              <p className='mb-2'>
                <i className='fa fa-envelope text-primary mr-3'></i>
                info@example.com
              </p>
              <p className='mb-2'>
                <i className='fa fa-phone-alt text-primary mr-3'></i>+92 345
                67890
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
