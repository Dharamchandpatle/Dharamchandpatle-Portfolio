import { FaAward, FaChartLine, FaTrophy, FaMedal } from 'react-icons/fa';

const achievements = [
  {
    title: '400+ LeetCode Problems Solved',
    subtitle: 'Strengthened algorithm and data structure skills for software interviews and production-grade problem solving.',
    icon: <FaChartLine className='text-3xl text-[#fe9901]' />,
  },
  {
    title: 'Winner - DevDock Hackathon',
    subtitle: 'Acropolis College, Indore — Delivered an innovative product under tight deadlines and earned top honors.',
    icon: <FaTrophy className='text-3xl text-[#fe9901]' />,
  },
  {
    title: 'Smart India Hackathon Finalist',
    subtitle: 'National finalist among 50 teams, building intelligent automation solutions for real-time problems.',
    icon: <FaAward className='text-3xl text-[#fe9901]' />,
  },
  {
    title: 'Runner-Up - DevCraft Hackathon',
    subtitle: 'IIT Indore — Delivered a high-impact project with a strong technical presentation and teamwork.',
    icon: <FaMedal className='text-3xl text-[#fe9901]' />,
  },
];

const Certifications = () => {
  return (
    <section className='py-20 bg-[#f5f4f0] text-[#000]' id='certifications'>
      <div className='px-3 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <div className='flex items-center mb-8'>
          <h2 className='text-xl font-semibold'>
            <span className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]'>04.</span> Certifications & Achievements
          </h2>
          <div className='flex items-center pl-3'>
            <span className='block w-24 h-1 rounded bg-[#fe9901]'></span>
          </div>
        </div>

        <div className='max-w-3xl mb-12'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
            Honed skills, hackathon wins, and industry-ready certifications.
          </h1>
          <p className='mt-4 text-base text-gray-600'>
            I focus on real-world impact through award-winning projects, strong algorithmic foundations, and certifications in networking, cloud, and full-stack development.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          {achievements.map((item, index) => (
            <div key={index} className='p-6 bg-white rounded-3xl shadow-lg hover:-translate-y-1 transition-transform'>
              <div className='flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#fdf1db]'>
                {item.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
              <p className='text-[#4c4c4c]'>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
