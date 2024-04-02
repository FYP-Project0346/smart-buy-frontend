import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AllProducts from './Pages/AllProducts'
import Details from './Pages/Details'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Profile from './Pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Allproducts' element={<AllProducts />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
