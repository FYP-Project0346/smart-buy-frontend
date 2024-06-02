import React, { Component, useState } from 'react'
import services from '../../services/services'

function ContactForm({loginData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if all required fields are filled out
    if (
      name === '' ||
      email === '' ||
      message === '' ||
      subject === ''
    ) {
      alert('Please fill out all required fields')
      return
    }

    const currentDate = new Date().toLocaleString() // Get current date and time
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      currentDate: currentDate,
      islogin: loginData.type !== "guest",
      cus_id: loginData.id
    }
    console.log(formData)
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
                onSubmit={handleSubmit}
              >
                <div className='control-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}
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
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
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
                    onChange={(e)=>{
                      setSubject(e.target.value)
                    }}
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
                    onChange={(e)=>{
                      setMessage(e.target.value)
                    }}
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
            We'd love to hear from you! Whether you have a question about your order, need assistance with a product, or just want to say hi, our team is here to help.
            </p>
            <div className='d-flex flex-column mb-3'>
              <h5 className='font-weight-semi-bold mb-3'>Contact Through</h5>
              <p className='mb-2'>
                <i className='fa fa-map-marker-alt text-primary mr-3'></i>
                abrehman0346@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactForm
