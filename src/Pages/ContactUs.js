import {React, useContext} from 'react'
import Navbar from '../Components/Shared/Navbar'
import Container from '../Components/Contact/Container'
import Return from '../Components/Contact/Return'
import ContactForm from '../Components/Contact/ContactForm'
import Footer from '../Components/Shared/Footer'
import userContext from '../Context/Create-Context'
function ContactUs() {
  const loginData = useContext(userContext);
  return (
    <div>
      <Navbar disableSearch={true} loginData={loginData.state} />
      <Container />
      <ContactForm loginData={loginData.state}/>
      <Return />
      <Footer />
    </div>
  )
}

export default ContactUs
