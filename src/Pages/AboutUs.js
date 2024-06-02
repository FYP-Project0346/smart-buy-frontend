import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Container from '../Components/About/Container'
import Text from '../Components/About/Text'
import Team from '../Components/About/Team'
import Features from '../Components/About/Features'
import Footer from '../Components/Shared/Footer'
import Featured from '../Components/Featured'
import userContext from '../Context/Create-Context'
import { useContext } from 'react'

function AboutUs() {
  const loginData = useContext(userContext)
  return (
    <div>
      <Navbar disableSearch={true} loginData={loginData} />
      <Container />
      <Text />
      <Team />
      <Featured />
      <Footer />
    </div>
  )
}

export default AboutUs
