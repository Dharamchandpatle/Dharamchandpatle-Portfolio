import React from 'react';
import Header from './components/Header';
import './App.css'
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import About from './components/About';
import WhyChooseMe from './components/WhyChooseMe';
import MyWorks from './components/MyWorks';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/hero" element={<HomeSection />} />
        <Route path="/About" element={<About />} />
        <Route path="/whychooseme" element={<WhyChooseMe />} />
        <Route path="/myworks" element={<MyWorks />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
