import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaLinkedin, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const skillsData = [
    { name: "HTML", icon: <FaHtml5 className="text-2xl text-[#fe9901] mr-2" /> },
    { name: "CSS", icon: <FaCss3Alt className="devicon-cplusplus-line colored text-2xl text-[#fe9901] mr-2" /> },
    { name: "Java Script", icon: <IoLogoJavascript className="devicon-cplusplus-line colored text-2xl text-[#fe9901] mr-2" /> },
    { name: "SASS", icon: <FaSass className="devicon-cplusplus-line colored text-2xl text-[#fe9901] mr-2" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="devicon-tailwindcss-plain colored text-2xl text-[#fe9901] mr-2" /> },
    { name: "React js", icon: <FaReact className="devicon-nextjs-original colored text-2xl text-[#fe9901] mr-2" /> },
    { name: "Node js", icon: <FaNodeJs className="devicon-nextjs-original colored text-2xl text-[#fe9901] mr-2" /> },
    { name: "Express js", icon: <SiExpress className="text-2xl text-[#fe9901] mr-2" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl text-[#fe9901] mr-2" /> },
    { name: "Git & Github ", icon: <FaGitAlt className="text-2xl text-[#fe9901] mr-2" /> },
    { name: "Java", icon: <FaJava className="text-2xl text-[#fe9901] mr-2" /> },
    { name: "DBMS", icon: <FaDatabase className="text-2xl text-[#fe9901] mr-2" /> },
];

const experienceData = [
    {
        date: "October 2022",
        title: "Attended Hackathon in SV Polytechnic College Bhopal ",
        description: "Amazing Experience, Interaction With Many Personalities And Next Level Learning From People."
    },
    {
        date: "October 2022",
        title: "Complete CCNA , Cloud Computing Internship",
        description: "Amazing Experience, Interaction With Many Personalities And Next Level Learning From People."
    },
    {
        date: "October 2022",
        title: "Complete Full Stack Development Internship Connect Siksha ",
        description: "Amazing Experience, Interaction With Many Personalities And Next Level Learning From People."
    },
    
];

const About = () => {
    return (
        <section className="sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-[5rem] pb-[5rem] px-3 bg-white text-black flex flex-col md:flex-row justify-center items-start gap-7" id="about">
            <div className="sm:w-[100%] md:w-[50%]">
                <div className="flex items-center">
                    <h2 className="text-xl font-semibold">
                        <span className="font-bold text-4xl text-[#95adbe]">01.</span> About Me
                    </h2>
                    <div className="flex items-center pl-3">
                        <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
                    </div>
                </div>

                <div className="description mt-4 text-lg">
                    <h1 className="leading-10 font-semibold text-2xl">
                        Hello, I am <span className="font-bold text-2xl text-[#fe9901]">D</span>haramchand <span className="font-bold text-2xl text-[#95adbe]">P</span>atle
                    </h1>
                    <p className="text-[#4c4c4c]">
                    Full Stack Developer with expertise in React.js and Node.js, specializing in building responsive web applications. Skilled in front-end and back-end technologies, I create seamless user experiences with scalable, efficient solutions.
                    </p>
                    <p className="text-[#4c4c4c]">
                        Here are technologies I’ve been working with recently:
                    </p>
                </div>
                <br />

                {/* Technologies Section with Icons */}
                <div className="technologies flex flex-wrap gap-6 mt-4">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="flex items-center bg-[#f0eff4] rounded-lg p-3 shadow-md transition-transform transform hover:scale-105">
                            {skill.icon}
                            <span className="font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* LinkedIn Button */}
                <div className="btn-box mt-4">
                    <h2 className="font-semibold text-[#4c4c4c] leading-10">
                        Connect With me Now at :&nbsp;&nbsp;
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dharamchand-fullstackdeveloper/" className="btn px-5 py-2 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-white flex items-center space-x-2">
                            <FaLinkedin className="text-white" />
                            <span>LinkedIn</span>
                        </a>
                    </h2>
                </div>
            </div>

            {/* Right Side - Experience */}
            <div className="bg-white shadow-lg p-6 rounded-md flex-grow md:w-[50%] max-h-[30rem] overflow-y-auto custom-scrollbar mt-4 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="border-l-4 border-[#fe9901] pl-4">
                            <p className="text-sm text-gray-600">{experience.date}</p>
                            <h3 className="text-lg font-bold">{experience.title}</h3>
                            <p className="text-gray-700">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
