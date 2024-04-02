import React, { useEffect } from 'react'
import Navbar from '../Components/Shared/Navbar'
import Products from '../Components/Products'
import Footer from '../Components/Shared/Footer'
import dbService from '../services/services.js'
import { useState } from 'react'

function AllProducts() {
  const [products, setProducts] = useState([])

  async function searchProducts(query){
      const products = await dbService.getAllProducts(query, undefined, undefined, undefined, undefined, undefined)
      console.log(products)
      setProducts(products)
  }



  return (
    <div>
      <Navbar searchActionHandler={searchProducts} />
      <Products doesShow={false} products={products} />
      <Footer />
    </div>
  )
}

export default AllProducts
