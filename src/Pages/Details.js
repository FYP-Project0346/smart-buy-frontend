import React from 'react'
import Description from '../Components/Description'
import Footer from '../Components/Shared/Footer'
import Navbar from '../Components/Shared/Navbar'

function Details() {
  return (
    <div>
      <Navbar disableSearch={true} />
      <Description />
      <Footer />
    </div>
  )
}

export default Details
