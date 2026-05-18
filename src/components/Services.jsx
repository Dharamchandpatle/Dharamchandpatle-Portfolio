import { MdDesignServices, MdOutlineOndemandVideo } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      description: 'Building responsive MERN and Python-powered applications with clean UI, secure APIs, and scalable backend architecture.',
      icon: 'web',
    },
    {
      id: 2,
      title: 'AI/ML Solutions',
      description: 'Developing data-driven models, anomaly detection systems, and forecasting pipelines using Python, Scikit-learn, and Prophet.',
      icon: 'ml',
    },
    {
      id: 3,
      title: 'Technical Content & Mentoring',
      description: 'Creating developer tutorials, portfolio-ready documentation, and mentoring aspiring coders through practical projects.',
      icon: 'content',
    },
  ];

  return (
    <section className="flex items-center justify-center bg-[#ffffff] lg:h-screen" id="services">
      <div className="px-2 py-20 mx-auto sm:w-[85%]">
        {/* Title Section */}
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">
            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]">05.</span> Services
          </h2>
          <div className="flex items-center pl-3">
            <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
          </div>
        </div>

        {/* Services Description */}
        <br />
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                SERVICES
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-[#fe9901]">
                Our <span className="text-[#4c4c4c]">SERVICES</span>
              </h1>
              <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div className="flex-1 h-2 bg-orange-200"></div>
                <div className="flex-1 h-2 bg-[#a2a8ad]"></div>
                <div className="flex-1 h-2 bg-[#4c4c4c]"></div>
              </div>
            </div>
            <p className="mb-16 text-base text-center text-gray-500">WHAT I WILL DO FOR YOU</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="sm:px-8 md:px-12 lg:px-10 xl:px-20 pb-4 px-2  mb-14 text-center transition-all bg-[#f0eff4] text-[#4c4c4c] rounded shadow hover:shadow-lg hover:shadow-[#fe9901]">
      <div className="inline-block p-2 mb-6 -mt-16 bg-[#f0eff4] text-[#000] shadow-lg shadow-[#fe9901] rounded-full">
        {/* SVG Icon */}
        <Icon icon={icon} />
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-[#000]">{title}</h3>
      <p className="text-base text-[#4c4c4c] pb-3">{description}</p>
    </div>
  );
};

// Icon Component
const Icon = ({ icon }) => {
  if (icon === 'web') {
    return <TbWorldWww className='text-4xl text-[#fe9901]' />;
  }
  if (icon === 'ml') {
    return <MdDesignServices className='text-4xl text-[#fe9901]' />;
  }
  if (icon === 'content') {
    return <MdOutlineOndemandVideo className='text-4xl text-[#fe9901]' />;
  }
  return null;
};

export default Services;