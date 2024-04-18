import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Shared/Navbar'
import Products from '../Components/Products'
import Footer from '../Components/Shared/Footer'
import dbService from '../services/services.js'

function AllProducts() {
  const [products, setProducts] = useState([])
  const [skipProducts, setSkipProducts] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  let productsInPage = 16
  let minprice = 10000
  let maxprice = 25000
  async function searchProducts(query) {
    console.log('search products called...')
    const products = await dbService.getAllProducts(
      query,
      productsInPage,
      skipProducts,
      maxprice,
      minprice,
      undefined
    )
    console.log(products)
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    console.log('fetch products called...')
    const fetchedProducts = await dbService.getAllProducts(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    )
    setProducts(fetchedProducts)
  }

  const handleNextPage = () => {
    console.log('working...')
    setSkipProducts(skipProducts + productsInPage)
    searchProducts(searchTerm)
  }

  const handlePreviousPage = () => {
    if (skipProducts > 0) {
      setSkipProducts(skipProducts - productsInPage)
      searchProducts(searchTerm)
    }
  }

  return (
    <div>
      <Navbar
        searchActionHandler={searchProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Products doesShow={false} products={products} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <button
          onClick={handlePreviousPage}
          disabled={setSkipProducts === 0}
          className='btn btn-primary'
        >
          Previous
        </button>
        <button onClick={handleNextPage} className='btn btn-primary'>
          Next
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts
