import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HeroPage from './pages/HeroPage';
import Home from './pages/Home';
import MyWorksPage from './pages/MyWorksPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseMePage from './pages/WhyChooseMePage';


function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/whychooseme" element={<WhyChooseMePage />} />
        <Route path="/myworks" element={<MyWorksPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
