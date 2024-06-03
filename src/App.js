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
import ProfileState from './Context/UserState'
import ForgotPassword from './Components/ForgetPassword'
import SetCode from './Components/SetCode'
import TestingPanel from './Pages/TestingPanel'
<<<<<<< HEAD
import Comparison from './Pages/Comparison'

=======
import ShopNow from './Components/ShopNow' // Ensure this import is correct
>>>>>>> 0cb9e6f429348194308f0580af0b3f086119abec

function App() {
  return (
    <ProfileState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Allproducts/:query' element={<AllProducts />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/text' element={<TestingPanel />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/setcode/:email' element={<SetCode />} />
<<<<<<< HEAD
          <Route path='/test' element={<TestingPanel />} />
          <Route path='/compare' element={<Comparison/>} />
=======
          <Route path='/ShopNow' element={<ShopNow />} />{' '}
          {/* Ensure this route is correct */}
>>>>>>> 0cb9e6f429348194308f0580af0b3f086119abec
        </Routes>
      </Router>
    </ProfileState>
  )
}

export default App
