import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutUs'         
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './content/Navbar'
import Product from './pages/Product'
import WhyUs from './pages/WhyUs'
import OurManufacturing from './pages/OurManufacturing'
import OurServices from './pages/OurServices'
import ContactUs from './pages/ContactUs'
 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about-us' element={<AboutPage />} /> 
        <Route path='/products' element={<Product />} />
        <Route path='/manufacture' element={<OurManufacturing/>}/>
        <Route path='/service' element={<OurServices/>}/>
        <Route path='/why-us' element={<WhyUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App