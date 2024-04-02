import React from 'react'
import Navbar from '../Components/Navbar'
import Offers from '../Components/Offers'
import Website from '../Components/Website'
import Products from '../Components/Products'
import Footer from '../Components/Shared/Footer'
import Featured from '../Components/Featured'
import service from "../services/services"
import { useEffect } from 'react'
import { useState } from 'react'


function Home() {
  const [products, setProducts] = useState()

  useEffect(()=>{
    getProducts()
  }, [])

  async function getProducts(){
    const data = await service.getAllProducts(undefined, undefined, undefined, undefined, undefined, ["hello", "world"])
    setProducts(data)
  }

  if (!products){
    return null
  }


  return (
    <div>
      <Navbar />
      <Website />
      <Products doesShow={true} products={products} />
      <Offers />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
