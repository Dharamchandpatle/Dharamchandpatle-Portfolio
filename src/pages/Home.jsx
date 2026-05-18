import About from '../components/About';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import HomeSection from '../components/HomeSection';
import MyWorks from '../components/MyWorks';
import Services from '../components/Services';
import WhyChooseMe from '../components/WhyChooseMe';

const Home = () => {
  return (
    <div>
      <HomeSection />
      <About />
      <MyWorks />
      <Certifications />
      <WhyChooseMe />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;