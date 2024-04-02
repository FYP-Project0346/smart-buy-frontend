import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Container from '../Components/Contact/Container'
import Return from '../Components/Contact/Return'
import ContactForm from '../Components/Contact/ContactForm'
import Footer from '../Components/Shared/Footer'
function ContactUs() {
  return (
    <div>
      <Navbar />
      <Container />
      <ContactForm />
      <Return />
      <Footer />
    </div>
  )
}

export default ContactUs
