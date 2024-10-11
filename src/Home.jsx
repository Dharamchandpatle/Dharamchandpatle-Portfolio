import React from 'react'
import HomeSection from './components/HomeSection'
import About from './components/About'
import WhyChooseMe from './components/WhyChooseMe'
import MyWorks from './components/MyWorks';
import Services from './components/Services';
import Contact from './components/Contact';


const Home = () => {
  return (
    <div>
        <HomeSection/>
        <About/>
        <WhyChooseMe />
        <MyWorks/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home