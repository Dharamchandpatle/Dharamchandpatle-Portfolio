import React, { useEffect, useState } from 'react';
import { FaBolt, FaHandshake, FaHourglassHalf, FaReact, FaThumbsUp } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa";

// Sample data for services using React Icons
const servicesData = [
  {
    title: "Super Fast Delivery",
    icon: <FaBolt className="mr-2 text-2xl text-[#fe9901]" />
  },
  {
    title: "Good Communication Skills",
    icon: <FaHandshake className="mr-2 text-2xl text-[#fe9901]" />
  },
  {
    title: "24x7 Support Available",
    icon: <FaHourglassHalf className="mr-2 text-2xl text-[#fe9901]" />
  },
  {
    // title: "Unlimited Revision",
    // icon: <FaArrowsRotate className="mr-2 text-2xl text-[#fe9901]" />
  },
  {
    title: "Guarantee",
    icon: <FaThumbsUp className="mr-2 text-2xl text-[#fe9901]" />
  },
  {
    title: "100% Client Satisfaction",
    icon: <FaReact className="mr-2 text-2xl text-[#fe9901]" />
  }
];

const WhyChooseMe = () => {
  // State to hold the counting values for each box
  const [clientCount, setClientCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  const targetClientCount = 15; // Stopping number for clients
  const targetCoffeeCount = 200; // Stopping number for coffee cups
  const targetProjectCount = 20; // Stopping number for projects
  const targetExperienceCount = 2; // Stopping number for years of experience

  // Counter functions
  useEffect(() => {
    const clientInterval = setInterval(() => {
      if (clientCount < targetClientCount) {
        setClientCount(prevCount => prevCount + 1);
      } else {
        clearInterval(clientInterval);
      }
    }, 50);

    return () => clearInterval(clientInterval);
  }, [clientCount]);

  useEffect(() => {
    const coffeeInterval = setInterval(() => {
      if (coffeeCount < targetCoffeeCount) {
        setCoffeeCount(prevCount => prevCount + 1);
      } else {
        clearInterval(coffeeInterval);
      }
    }, 50);

    return () => clearInterval(coffeeInterval);
  }, [coffeeCount]);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      if (projectCount < targetProjectCount) {
        setProjectCount(prevCount => prevCount + 1);
      } else {
        clearInterval(projectInterval);
      }
    }, 50);

    return () => clearInterval(projectInterval);
  }, [projectCount]);

  useEffect(() => {
    const experienceInterval = setInterval(() => {
      if (experienceCount < targetExperienceCount) {
        setExperienceCount(prevCount => prevCount + 1);
      } else {
        clearInterval(experienceInterval);
      }
    }, 50);

    return () => clearInterval(experienceInterval);
  }, [experienceCount]);

  return (
    <section className="pt-[5rem] px-3 pb-[4rem]sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#f5f4f0] text-black flex flex-col sm:flex-row justify-center items-center sm:gap-14" id="Why-choose-me">
      {/* Left Section - Services */}
      <div className="sm:w-[53%]">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold"><span className="font-bold text-4xl text-[#95adbe]">02.</span> Why Choose Me?</h2>
          <div className="flex items-center pl-3">
            <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
          </div>
        </div>

        <div className="description text-lg mt-4">
          <h1 className="leading-10 font-semibold text-2xl">
            <span className="font-bold text-2xl text-[#fe9901]">C</span>reative <span className="font-bold text-2xl text-[#fe9901]">W</span>eb <span className="font-bold text-2xl text-[#fe9901]">D</span>esigner
          </h1>
          <p className="text-[#212121]">
          Passionate Full Stack Developer skilled in React.js and Node.js, dedicated to crafting modern, responsive web applications. Committed to delivering clean, efficient code and innovative solutions that blend design and functionality for optimal user experiences.
          </p>
          <p className="text-[#2a2a2a]"><b>Here are all services that I’ll be offering to you:</b></p>
        </div>
        <br />

        {/* Dynamic services data */}
        <div className="tools flex gap-9">
          <div>
            <ul>
              {servicesData.slice(0, 3).map((service, index) => (
                <li key={index} className='p-1'>
                  <a href="#" className="flex items-center lg:text-base sm:text-xs">
                    {service.icon} {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {servicesData.slice(3).map((service, index) => (
                <li key={index} className='p-1'>
                  <a href="#" className="flex items-center lg:text-base sm:text-xs">
                    {service.icon} {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btn-box mt-4">
          <h2 className="font-semibold text-[#4c4c4c] leading-10">Click Now:&nbsp;&nbsp;
            <a rel="noopener noreferrer" download="" target="_blank" href="https://drive.google.com/file/d/186Kk1b1d-39D3LFdR9Y3RmczzvnTehzP/view?usp=drivesdk" className="btn px-5 sm:px-5 py-2 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-[#ffffff]">
              &nbsp;&nbsp;<FaDownload />
              &nbsp; Resume 
            </a>
          </h2>
        </div>
        <br />
      </div>
      <br />

      {/* Right Section - Counters */}
      <div className="flex justify-center items-center gap-5 sm:flex-wrap sm:pt-12 pb-5">
        <div className="">
          <div className="lg:text-2xl sm:text-base text-center border-2 lg:mb-4 p-6 lg:p-6 sm:p-6 shadow-md hover:shadow-[#fe9901] rounded-l-lg border-[#fe9901]">
            <h2>{clientCount}+</h2>
            <h4>Our Happy Clients</h4>
          </div>
          <div className="lg:text-2xl sm:text-base text-center border-2 lg:mb-4 p-6 mt-4 lg:p-6 sm:p-6 shadow-md hover:shadow-[#a2a8ad] rounded-b-lg border-[#95adbe]">
            <h2>{coffeeCount}+</h2>
            <h4>Cups of Coffee</h4>
          </div>
        </div>
        <div className="box-container box-container-2">
          <div className="lg:text-2xl sm:text-base text-center border-2 lg:mb-4 p-6 lg:p-6 sm:p-6 shadow-md hover:shadow-[#a2a8ad] rounded-r-lg border-[#95adbe]">
            <h2>{projectCount}+</h2>
            <h4>Projects Completed</h4>
          </div>
          <div className="lg:text-2xl sm:text-base text-center border-2 lg:mb-4 p-6 mt-4 lg:p-6 sm:p-6 shadow-md hover:shadow-[#fe9901] rounded-r-lg border-[#fe9901]">
            <h2>{experienceCount}+</h2>
            <h4>Years Experience</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
