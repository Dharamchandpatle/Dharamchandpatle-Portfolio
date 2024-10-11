import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaArrowRight, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";

const projects = [
  {
    id: 1,
    title: 'Girls Beauty parlour website',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/Girls Beauty parlour website.png',
    link: 'https://timely-lily-9bf1da.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Purulia Travel Agency 🚀',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/purulia-travel.png',
    link: 'https://puruliatravelsfinal.netlify.app/',
    technologies: ['React js', 'JavaScript', 'Node js'],
  },
  {
    id: 3,
    title: 'Connect Siksha Coding School',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/conectsiksha.png',
    link: 'https://connectshiksha.com/',
    technologies: ['React js', 'Node js', 'MongoDB'],
  },
  {
    id: 4,
    title: 'Udemy Coding School Clone',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/Udemy.png',
    link: 'https://udemy-clone-bw5udkzns-dharamchandpatles-projects.vercel.app/',
    technologies: ['React js', 'JavaScript', 'Node js'],
  },
  {
    id: 5,
    title: 'Boy Hair Shailu Website',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/image.png',
    link: 'https://fabulous-conkies-dac0a5.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 6,
    title: 'Travel Agency',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/traversy.png',
    link: 'https://traversi-travel-reactjs-cwxutmoqb-dharamchandpatles-projects.vercel.app/',
    technologies: ['React js', 'Node js', 'JavaScript', 'MongoDB'],
  },
];

const Portfolio = () => {
  return (
    <section className="py-12 mt-10 bg-[#ffffff] text-[#000] lg:px-16 sm:px-8 px-4">
      <div className="flex items-center pb-4">
        <h2 className="text-2xl font-semibold">
          <span className="font-bold text-4xl text-[#95adbe]">03.</span> My Works
        </h2>
        <div className="flex items-center pl-3">
          <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
        </div>
      </div>

      {/* Swiper with autoplay */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group rounded-md shadow bg-[#f0eff4] dark:shadow-gray-400">
              <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="scale-125 group-hover:scale-100 duration-500" // Hover effect from code1
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">{project.title}</h3>
                <p className="text-[#4c4c4c] mb-3 text-sm">{project.description}</p>

                <div className="technologies mb-3">
                  <h4 className="text-sm font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap space-x-1 mt-1">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center bg-[#ffff] rounded-lg p-1 mb-2 mx-2 shadow-md transition-transform transform hover:scale-102"
                      >
                        {tech === 'HTML' && <FaHtml5 className="text-lg text-[#fe9901] mr-2" />}
                        {tech === 'CSS' && <FaCss3Alt className="text-lg text-[#fe9901] mr-2" />}
                        {tech === 'JavaScript' && <FaJs className="text-lg text-[#fe9901] mr-2" />}
                        {tech === 'Tailwind CSS' && <SiTailwindcss className="text-lg text-[#fe9901] mr-2" />}
                        {tech === 'React js' && <FaReact className="text-lg text-[#fe9901] mr-2" />}
                        {tech === 'Node js' && <FaNodeJs className="text-lg text-[#fe9901] mr-2" />}
                        {tech === 'MongoDB' && <SiMongodb className="text-lg text-[#fe9901] mr-2" />}

                        &nbsp;<span className="text-[#4c4c4c] text-xs m1-2">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="btn-box mt-2">
                  <h2 className="font-semibold text-[#000] leading-10">
                    Have a Look:&nbsp;&nbsp;
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.link}
                      className="btn px-4 sm:px-4 py-1 text-base sm:text-base font-semibold rounded bg-[#95adbe] text-[#ffffff]"
                    >
                      Let's See &nbsp;<FaArrowRight />
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
