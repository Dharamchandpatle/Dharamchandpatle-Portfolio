import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaArrowRight, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

// Function to generate a random image URL
// const getRandomImage = () => `https://picsum.photos/seed/${Math.random()}/400/300`;

const projects = [
  {
    id: 1,
    title: 'Girls Beauty parlour website ',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/Girls Beauty parlour website.png', // Random image URL
    link: 'https://timely-lily-9bf1da.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 1,
    title: 'Purulia Travel Agency 🚀',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/purulia-travel.png', // Random image URL
    link: 'https://puruliatravelsfinal.netlify.app/',
    technologies: ['React js', 'JavaScript', 'Node js'],
  },
  {
    id: 1,
    title: 'Connect Siksha Coding School ',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/conectsiksha.png', // Random image URL
    link: 'https://connectshiksha.com/',
    technologies: ['React js', 'Node js', 'MongoDB'],
  },
  {
    id: 1,
    title: 'Udemy Coding School Clone ',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/Udemy.png', // Random image URL
    link: 'https://udemy-clone-bw5udkzns-dharamchandpatles-projects.vercel.app/',
    technologies: ['React js', 'JavaScript', 'Node js'],
  },
  {
    id: 1,
    title: 'Boy Hair Shailu Website ',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/image.png', // Random image URL
    link: 'https://fabulous-conkies-dac0a5.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 1,
    title: 'Travel Agency',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams.',
    image: 'images/traversy.png', // Random image URL
    link: 'https://traversi-travel-reactjs-cwxutmoqb-dharamchandpatles-projects.vercel.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  // Add other projects similarly
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
      {/* Adjust the grid layout for responsive design */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded-md  bg-[#f0eff4] cursor-pointer shadow-sm transition-transform duration-300 hover:scale-102 hover:shadow-[0_10px_15px_-3px_rgba(254,153,1,0.4)]"
          >
            {/* Keep the image height and width ratio as per the reference */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-3 h-[200px] w-full object-cover"
            />
            <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">
              {project.title}
            </h3>
            <p className="text-[#4c4c4c] mb-3 text-sm">{project.description}</p>

            <div className="technologies mb-3">
              <h4 className="text-sm font-semibold">Technologies Used:</h4>
              <div className="flex flex-wrap space-x-1 mt-1">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center bg-[#f0eff4] rounded-lg p-1 shadow-md transition-transform transform hover:scale-102"
                  >
                    {tech === 'HTML' && <FaHtml5 className="text-lg text-[#fe9901] mr-3" />}
                    {tech === 'CSS' && <FaCss3Alt className="text-lg text-[#fe9901] mr-3" />}
                    {tech === 'JavaScript' && <FaJs className="text-lg text-[#fe9901] mr-3" />}
                    {tech === 'Tailwind CSS' && <SiTailwindcss className="text-lg text-[#fe9901] mr-3" />}
                    {tech === 'React js' && <FaReact className="text-lg text-[#fe9901] mr-3" />}
                    {tech === 'Node js' && <FaNodeJs className="text-lg text-[#fe9901] mr-3" />}
                    {tech === 'MongoDB' && <SiMongodb className="text-lg text-[#fe9901] mr-3" />}

                    &nbsp;<span className="text-[#4c4c4c] text-xs">{tech}</span>
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
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
