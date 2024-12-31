import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './DonationComponent/Header'
import Home from './DonationComponent/Home'
import About from './DonationComponent/About'
import Footer from './DonationComponent/Footer';
import Register from './DonationComponent/Register';
import Contact from './DonationComponent/Contact';
import Login from './DonationComponent/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)




