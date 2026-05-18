import { FaCss3Alt, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaLinkedin, FaNodeJs, FaReact, FaPython } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: <FaJava className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'JavaScript', icon: <IoLogoJavascript className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'Python', icon: <FaPython className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'React.js', icon: <FaReact className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'Express.js', icon: <SiExpress className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'FastAPI', icon: <FaPython className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'MySQL', icon: <FaDatabase className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'HTML', icon: <FaHtml5 className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className='text-2xl text-[#fe9901] mr-2' /> },
  { name: 'DBMS', icon: <FaDatabase className='text-2xl text-[#fe9901] mr-2' /> },
];

const educationData = [
  {
    date: '2024 – Present',
    title: 'Bachelor of Engineering in Computer Engineering',
    description: 'Institute of Engineering and Technology, DAVV Indore, India — CGPA: 8.7/10.0. Focused on full-stack development, AI/ML, and data-driven applications.',
  },
  {
    date: 'Dec 2021 – May 2024',
    title: 'Diploma in Computer Science & Engineering',
    description: 'Govt. Polytechnic College Balaghat, Madhya Pradesh — CGPA: 8.81. Built strong foundations in algorithms, DBMS, and networking.',
  },
];

const experienceData = [
  {
    date: 'Jan 2026',
    title: 'AI/ML Intern (Team Lead)',
    description: 'Indian Oil Corporation Limited (IOCL), Guwahati Refinery — Led an AI-driven monitoring solution using Python, Scikit-learn, and Prophet for energy forecasting and anomaly detection.',
  },
  {
    date: 'Jul 2024 – Aug 2024',
    title: 'MERN Stack Intern (Team Lead)',
    description: 'Nextvanta Innovation Pvt. Ltd., Balaghat — Developed a travel management app with secure JWT authentication and reusable React components, improving frontend performance by 30%.',
  },
  {
    date: 'Ongoing',
    title: 'IET DAVV Student Attendance Management System',
    description: 'Building a scalable full-stack attendance platform with role-based access, automated leave management, and real-time notifications using React.js, Node.js, Express.js, MySQL, and JWT.',
  },
];

const About = () => {
  return (
    <section className='sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-[5rem] pb-[5rem] px-3 bg-white text-black flex flex-col md:flex-row justify-center items-start gap-7' id='about'>
      <div className='sm:w-[100%] md:w-[50%]'>
        <div className='flex items-center'>
          <h2 className='text-xl font-semibold'>
            <span className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]'>01.</span> About Me
          </h2>
          <div className='flex items-center pl-3'>
            <span className='block w-24 h-1 rounded bg-[#fe9901]'></span>
          </div>
        </div>

        <div className='description mt-4 text-lg'>
          <h1 className='leading-10 font-semibold text-xl sm:text-2xl'>
            Hello, I am <span className='font-bold text-xl sm:text-2xl text-[#fe9901]'>Dharamchand</span>{' '}
            <span className='font-bold text-xl sm:text-2xl text-[#95adbe]'>Patle</span>
          </h1>
          <p className='text-[#4c4c4c] mt-4'>
            Full Stack Developer and AI/ML Intern who builds production-ready applications and intelligent analytics systems. I combine modern React interfaces with Python ML pipelines for real-world impact.
          </p>
          <p className='text-[#4c4c4c] mt-3'>
            LinkedIn — GitHub — LeetCode — Portfolio
          </p>
        </div>

        <div className='technologies flex flex-wrap gap-6 mt-6'>
          {skillsData.map((skill, index) => (
            <div key={index} className='flex items-center bg-[#f0eff4] rounded-lg p-3 shadow-md transition-transform transform hover:scale-105'>
              {skill.icon}
              <span className='font-semibold'>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className='btn-box mt-6'>
          <h2 className='font-semibold text-[#4c4c4c] leading-10'>
            Connect With me Now at :&nbsp;&nbsp;
            <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/dharamchand-fullstackdeveloper/' className='btn px-5 py-2 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-white flex items-center space-x-2'>
              <FaLinkedin className='text-white' />
              <span>LinkedIn</span>
            </a>
          </h2>
        </div>
      </div>

      <div className='bg-white shadow-lg p-6 rounded-md flex-grow md:w-[50%] max-h-[30rem] overflow-y-auto custom-scrollbar mt-4 md:mt-0'>
        <h2 className='text-2xl font-bold mb-6'>Education & Experience</h2>

        <div className='space-y-10'>
          <div>
            <h3 className='text-xl font-semibold mb-4 text-[#000]'>Education</h3>
            {educationData.map((item, index) => (
              <div key={index} className='border-l-4 border-[#fe9901] pl-4 mb-6'>
                <p className='text-sm text-gray-600'>{item.date}</p>
                <h4 className='text-lg font-bold'>{item.title}</h4>
                <p className='text-gray-700'>{item.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4 text-[#000]'>Experience</h3>
            {experienceData.map((experience, index) => (
              <div key={index} className='border-l-4 border-[#fe9901] pl-4 mb-6'>
                <p className='text-sm text-gray-600'>{experience.date}</p>
                <h4 className='text-lg font-bold'>{experience.title}</h4>
                <p className='text-gray-700'>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
