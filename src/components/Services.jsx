import React from "react";

const Services = () => {
  // Data for each service
  const serviceData = [
    {
      id: 1,
      title: "WEB DESIGN",
      description:
        "Elevate your brand with our custom web design services. From sleek layouts to immersive experiences, we craft websites tailored to your vision.",
      icon: "settings",
    },
    {
      id: 2,
      title: "CREATIVE DESIGN",
      description:
        "Transforming visions into visuals, we offer innovative design services tailored to your needs. From branding to digital experiences.",
      icon: "design",
    },
    {
      id: 3,
      title: "RESPONSIVE WEB DEVELOPMENT",
      description:
        "Crafting seamless digital experiences. Our responsive web development services ensure your site adapts flawlessly across all devices.",
      icon: "code",
    },
    // Add more services here...
  ];

  return (
    <section className="flex items-center justify-center bg-[#ffffff] lg:h-screen" id="services">
      <div className="px-2 py-20 mx-auto sm:w-[85%]">
        {/* Title Section */}
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">
            <span className="font-bold text-4xl text-[#95adbe]">05.</span> Services
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
              <h1 className="text-5xl font-bold dark:text-[#fe9901]">
                Our <span className="text-[#4c4c4c]">SERVICES</span>
              </h1>
              <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div className="flex-1 h-2 bg-blue-200"></div>
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
    <div className="sm:px-8 md:px-12 lg:px-16 xl:px-20  mb-14 text-center transition-all bg-[#f0eff4] text-[#4c4c4c] rounded shadow hover:shadow-lg hover:shadow-[#fe9901]">
      <div className="inline-block p-4 mb-6 -mt-16 bg-[#f0eff4] text-[#000] shadow-lg shadow-[#fe9901] rounded-full">
        {/* SVG Icon */}
        <Icon icon={icon} />
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-[#000]">{title}</h3>
      <p className="text-base text-[#4c4c4c]">{description}</p>
    </div>
  );
};

// Icon Component
const Icon = ({ icon }) => {
  if (icon === "settings") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="text-white" viewBox="0 0 16 16">
        {/* Your SVG Path Here */}
      </svg>
    );
  }
  if (icon === "design") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="text-blue-400" viewBox="0 0 16 16">
        {/* Your SVG Path Here */}
      </svg>
    );
  }
  if (icon === "code") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="text-white" viewBox="0 0 16 16">
        {/* Your SVG Path Here */}
      </svg>
    );
  }
  return null;
};

export default Services;
