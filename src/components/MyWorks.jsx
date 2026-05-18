import { FaArrowRight, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: 'IET DAVV Student Attendance Management System',
    description: 'Building a scalable full-stack attendance platform with Admin, Faculty, and Student roles, automated leave management, and real-time notifications.',
    link: 'https://github.com/Dharamchandpatle',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
  },
  {
    id: 2,
    title: 'RefineIQ — AI-Driven Smart Refinery Intelligence',
    description: 'Developed an AI-powered refinery analytics platform for anomaly detection, energy forecasting, and optimization using Isolation Forest and Prophet.',
    link: 'https://github.com/Dharamchandpatle',
    technologies: ['Python', 'Scikit-learn', 'Prophet', 'FastAPI', 'React.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Travel Management Application',
    description: 'Created a full-stack travel booking app with secure authentication, dynamic itinerary management, and responsive UX for seamless bookings.',
    link: 'https://github.com/Dharamchandpatle',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
];

const Portfolio = () => {
  return (
    <section className="py-12 mt-10 bg-[#ffffff] text-[#000] lg:px-16 sm:px-8 px-4" id="myworks">
      <div className="flex items-center pb-4">
        <h2 className="text-2xl font-semibold">
          <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]">03.</span> My Works
        </h2>
        <div className="flex items-center pl-3">
          <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="p-6 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#f7f7f9', boxShadow: '0 6px 25px rgba(0,0,0,0.08)' }}>
              <div className="mb-4 h-40 rounded-lg flex items-center justify-center bg-[#ececf0]">
                <span className="text-sm text-[#4c4c4c] text-center px-4">{project.title} preview</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>{project.title}</h3>
              <p className="mb-4 text-sm text-[#4c4c4c]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#fe9901', color: '#0f1419' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <a rel="noopener noreferrer" target="_blank" href={project.link} className="inline-flex items-center px-4 py-2 rounded bg-[#95adbe] text-white font-semibold transition-all hover:opacity-90">
                View Project <FaArrowRight className="ml-2" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
