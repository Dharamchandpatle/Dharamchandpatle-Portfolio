import { useEffect, useState } from 'react';
import { FaBolt, FaHandshake, FaHourglassHalf, FaStar, FaDownload } from 'react-icons/fa';

const reasons = [
  'Led AI/ML development and team coordination for refinery analytics systems.',
  'Launched full-stack applications with secure JWT authentication and role-based access.',
  'Solved 400+ LeetCode problems to strengthen DSA and SQL problem-solving skills.',
  'Delivered production-ready dashboards using React.js, FastAPI, and MongoDB.',
  'Competed successfully in national hackathons with top placements and finalist ranks.',
  'Creates technical content, tutorials, and developer education resources.',
];

const WhyChooseMe = () => {
  const [leetcodes, setLeetcodes] = useState(0);
  const [hackathons, setHackathons] = useState(0);
  const [projects, setProjects] = useState(0);
  const [leadership, setLeadership] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeetcodes((prev) => {
        const next = Math.min(prev + 20, 400);
        if (next === 400) clearInterval(interval);
        return next;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHackathons((prev) => {
        const next = Math.min(prev + 1, 6);
        if (next === 6) clearInterval(interval);
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => {
        const next = Math.min(prev + 1, 8);
        if (next === 8) clearInterval(interval);
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadership((prev) => {
        const next = Math.min(prev + 1, 2);
        if (next === 2) clearInterval(interval);
        return next;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[5rem] px-3 pb-[4rem] sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#f5f4f0] text-black flex flex-col sm:flex-row justify-center items-start gap-14" id="whychooseme">
      <div className="sm:w-[53%]">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">
            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]">04.</span> Why Choose Me?
          </h2>
          <div className="flex items-center pl-3">
            <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
          </div>
        </div>

        <div className="description text-lg mt-4">
          <h1 className="leading-10 font-semibold text-xl sm:text-2xl">
            Experienced Full Stack & AI/ML Developer powering high-impact web and data solutions.
          </h1>
          <p className="text-[#212121] mt-4">
            I bring strong full-stack engineering experience, machine learning modeling skills, and hackathon-proven execution to build reliable, scalable products.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow">
              <span className="mt-1 text-[#fe9901]">
                <FaStar />
              </span>
              <p className="text-[#333333]">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-lg bg-[#ffffff] shadow-md">
          <h3 className="text-2xl font-bold mb-3">Ready to build something impactful?</h3>
          <p className="text-[#4c4c4c] mb-4">
            Let’s collaborate on AI-enabled products, web applications, and automation systems that deliver results.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded bg-[#95adbe] text-white font-semibold hover:opacity-90 transition-opacity">
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center sm:w-[40%]">
        <div className="w-full sm:w-[48%] p-6 rounded-lg bg-white shadow-md text-center">
          <p className="text-4xl font-bold text-[#fe9901]">{leetcodes > 0 ? `${leetcodes}+` : '0+'}</p>
          <p className="mt-2 text-[#4c4c4c]">LeetCode Problems</p>
        </div>
        <div className="w-full sm:w-[48%] p-6 rounded-lg bg-white shadow-md text-center">
          <p className="text-4xl font-bold text-[#95adbe]">{hackathons}+</p>
          <p className="mt-2 text-[#4c4c4c]">Hackathon Awards</p>
        </div>
        <div className="w-full sm:w-[48%] p-6 rounded-lg bg-white shadow-md text-center">
          <p className="text-4xl font-bold text-[#fe9901]">{projects}+</p>
          <p className="mt-2 text-[#4c4c4c]">Projects Delivered</p>
        </div>
        <div className="w-full sm:w-[48%] p-6 rounded-lg bg-white shadow-md text-center">
          <p className="text-4xl font-bold text-[#95adbe]">{leadership}+</p>
          <p className="mt-2 text-[#4c4c4c]">Leadership Roles</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
