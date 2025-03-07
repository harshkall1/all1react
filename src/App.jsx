import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SubscribeSection from './Components/NewsLetter';

import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import About from './Pages/About';
import Ourprojects from './Pages/Ourprojects';
import { useEffect } from 'react';
import Marketingservices from './Pages/Marketing-services';
import Webbuild from './Pages/Webbuild';


function App() {

  useEffect(() => {
    Aos.init();
  })

  return (
    <>

        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/marketing" element={<Marketingservices />} />
            <Route path="/services/webbuild" element={<Webbuild />} />
            <Route path="/projects" element={<Ourprojects />} />
            <Route path="/about" element={<About />} />


          </Routes>
          <SubscribeSection />
          <Footer />
        </BrowserRouter>

    </>
  )
}

export default App
