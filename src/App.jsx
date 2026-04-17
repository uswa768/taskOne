import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './content/Navbar'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs.Jsx'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
