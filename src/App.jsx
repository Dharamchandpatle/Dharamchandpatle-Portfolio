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


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HomeSection/>
      <About/>
      <WhyChooseMe/>
      <MyWorks/>
      <Services/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
