import React from 'react'
import Navbar from '../Components/Navbar'
import Offers from '../Components/Offers'
import Website from '../Components/Website'
import Footer from '../Components/Shared/Footer'
import service from '../services/services'
import { useEffect } from 'react'
import { useState } from 'react'
import DataProducts from '../Components/DataProducts'
import Features from '../Components/About/Features'

function Home() {
  const [products, setProducts] = useState()

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const data = await service.getAllProducts('', 16, 0, 0, 0, [])
    setProducts(data)
  }

  if (!products) {
    return null
  }

  return (
    <div>
      <Navbar />
      <Website />
      {/* <Products doesShow={true} products={products} /> */}
      <DataProducts doesShow={true} products={products} />
      <Offers />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
