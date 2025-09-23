import About from '../components/About';
import Contact from '../components/Contact';
import HomeSection from '../components/HomeSection';
import MyWorks from '../components/MyWorks';
import Services from '../components/Services';
import WhyChooseMe from '../components/WhyChooseMe';


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