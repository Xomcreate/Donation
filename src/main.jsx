import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './DonationComponent/Header'
import Home from './DonationComponent/Home'
import About from './DonationComponent/About'
import Footer from './DonationComponent/Footer';
import Contact from './DonationComponent/Contact';
import SignUp from './DonationComponent/SignUp';
import Donate from './DonationComponent/Donate';
import Blog from './DonationComponent/Blog';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path='/Aboutus' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signup' element={<SignUp/>} />
        <Route path='/Donate' element={<Donate/>} />
        <Route path='/Blog' element={<Blog/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)