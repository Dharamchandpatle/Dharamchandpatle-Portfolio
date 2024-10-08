import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaArrowRight } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const MyWorks = () => {
  // Step 1: State to manage works
  const [works, setWorks] = useState([
    {
      id: 1,
      title: 'Vintage Made Modern Clone 🚀',
      description: 'A beautiful portfolio website with Services, Pricing and About, Contact Us Pages. Attractive layout designs and animations. Services Details and Testimonials are clearly mentioned. All images and content are copyright free.',
      videoSrc: 'Minimalist Laptop Mockup Beauty Facebook Cover (4).mp4',
      link: 'https://dharamchandpatle.github.io/wintage-tailwind/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Dribble Landing Page Clone 🚀',
      description: 'A beautiful portfolio website with Services, Pricing and About, Contact Us Pages. Attractive layout designs and animations. Services Details and Testimonials are clearly mentioned. All images and content are copyright free.',
      videoSrc: 'Minimalist Laptop Mockup Beauty Facebook Cover (5).mp4',
      link: 'https://dharamchandpatle.github.io/Dribbble/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'My Portfolio Design 🚀',
      description: 'A beautiful portfolio website with Services, Pricing and About, Contact Us Pages. Attractive layout designs and animations. Services Details and Testimonials are clearly mentioned. All images and content are copyright free.',
      videoSrc: 'Minimalist Laptop Mockup Beauty Facebook Cover (3).mp4',
      link: 'https://65c5ad677a5279559b72d8c2--verdant-sawine-b92bae.netlify.app/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
  ]);

  return (
    <section className="lg:p-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#ffffff] text-[#000]" id="my-works">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">
          <span className="font-bold text-4xl text-[#95adbe]">03.</span> My Best Works are
        </h2>
        <div className="flex items-center pl-3">
          <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
        </div>
      </div>
      <br />
      <div className="container mx-auto space-y-12">
        {works.map((work) => (
          <div key={work.id} className="bg-[#f0eff4] flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <video
              autoPlay
              muted
              loop
              src={work.videoSrc}
              className="h-80 bg-gray-500 object-contain"
            ></video>
            <div className="flex flex-col justify-center flex-1 p-6">
              <h3 className="text-3xl font-bold">{work.title}</h3>
              <p className="my-6 text-[#4c4c4c]">{work.description}</p>

              <div className="technologies">
                <h4 className="text-xl font-semibold">Technologies Used:</h4>
                <div className="flex flex-wrap space-x-2 mt-2">
                  {work.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex mb-2 items-center bg-[#f0eff4] rounded-lg p-3 shadow-md transition-transform transform hover:scale-105"
                    >
                      {tech === 'HTML' && <FaHtml5 className="text-2xl text-[#fe9901] mr-2" />}
                      {tech === 'CSS' && <FaCss3Alt className="text-2xl text-[#fe9901] mr-2" />}
                      {tech === 'JavaScript' && <FaJs className="text-2xl text-[#fe9901] mr-2" />}
                      {tech === 'Tailwind CSS' && <SiTailwindcss className="text-2xl text-[#fe9901] mr-2" />}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="btn-box mt-4">
                <h2 className="font-semibold text-[#000] leading-10">
                  Have a Look :&nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={work.link}
                    className="btn px-4 sm:px-4 py-1 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-[#ffffff]"
                  >
                    Let's See &nbsp;<FaArrowRight />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
