import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import Dharamchand3 from '../assets/images/Dharamchand3.jpg';
import { FaDownload } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const HomeSection = () => {
  return (
    <section className="bg-[#f0eff4] text-[#000] sm:px-8 md:px-12 lg:px-16 xl:px-20" id="home">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center sm:text-left lg:max-w-md xl:max-w-xl lg:w-3/5">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-4xl">H</span>i , My Name is 
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-snug">
            <span className="font-bold text-6xl text-[#fe9901]">D</span>haramchand 
            <span className="font-bold text-5xl text-[#95adbe]">P</span>atle 
          </h1>
          <br />
          <h3 className="font-semibold text-2xl sm:text-3xl">
            <span style={{ color: '#000' }}>
              <Typewriter
                words={[
                  "I build things for the web.",
                  "Content Creator 🚀.",
                  "JAVA + DSA Enthusiast.",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="mt-6 mb-8 text-base sm:text-lg lg:text-base xl:text-lg">
            I am a <span className="text-2xl text-[#fe9901]">F</span>ull 
            <span className="text-2xl text-[#fe9901]"> S</span>tack
            <span className="text-2xl text-[#fe9901]"> W</span>eb 
            <span className="text-2xl text-[#fe9901]"> D</span>eveloper. 
            with expertise in React.js, Tailwind CSS, JavaScript, and Node.js , Mongo DB .  
            <br className="hidden md:inline lg:hidden" />Proficient in the MERN stack and skilled in UI/UX design.
          </p>
          <div className="btn-box flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a 
              rel="noopener noreferrer" 
              download 
              target="_blank" 
              href="https://drive.google.com/file/d/1S5KFbG2woWy5aHpYGdHNozkAWtM6qTXs/view?usp=drivesdk" 
              className="btn px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-[#ffffff]"
            >
              <FaDownload /> &nbsp; Resume
            </a>
            <NavLink 
              rel="noopener noreferrer" 
              to="/contact" 
              className="btn px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#f0eff4]"
            >
              Connect with me 
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 lg:w-2/5">
          <img 
            src='images/Dharamchand3.jpg'
            alt="Business" 
            className="img-hero object-contain h-64 sm:h-72 lg:h-80 xl:h-96 2xl:h-112 animate-up-down img1 my-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
