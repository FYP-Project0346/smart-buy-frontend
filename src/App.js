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
import Test from './Pages/Test'
import ForgotPassword from './Components/ForgetPassword'
import SetCode from './Components/SetCode'
import TestingPanel from './Pages/TestingPanel'
import Comparison from './Pages/Comparison'


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
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/setcode/:email' element={<SetCode />} />
          <Route path='/test' element={<TestingPanel />} />
          <Route path='/compare' element={<Comparison/>} />
        </Routes>
      </Router>
    </ProfileState>
  )
}

export default App
