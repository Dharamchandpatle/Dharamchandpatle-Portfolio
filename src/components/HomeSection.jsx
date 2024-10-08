import React from 'react';
// import './Animation.css'; // Import the CSS file for animations

const HomeSection = () => {
  return (
    <section className="bg-[#f0eff4] text-[#000] sm:px-8 md:px-12 lg:px-16 xl:px-20" id="home">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center sm:text-left lg:max-w-md xl:max-w-lg">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-4xl">H</span>i , My Name is 
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-snug">
            <span className="font-bold text-6xl text-[#fe9901]">D</span>haramchand 
            <span className="font-bold text-5xl text-[#95adbe]">P</span>atle 
          </h1>
          <br />
          <h3 className="font-semibold text-2xl sm:text-3xl">I build things for the web.</h3>
          <p className="mt-6 mb-8 text-base sm:text-lg lg:text-base xl:text-lg">
            I am a <span className="text-2xl text-[#fe9901]">F</span>reelance 
            <span className="text-2xl text-[#fe9901]">W</span>eb 
            <span className="text-2xl text-[#fe9901]">D</span>esigner. 
            I work with small business owners, startups, 
            <br className="hidden md:inline lg:hidden" /> and individuals who want to get more online visibility.
          </p>
          <div className="btn-box flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a 
              rel="noopener noreferrer" 
              download 
              target="_blank" 
              href="https://drive.google.com/file/d/13KFA4C2IZPpCyJ3ctOajH1ov367W-y6N/view?usp=sharing" 
              className="btn px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-[#ffffff]"
            >
              Download CV
            </a>
            <a 
              rel="noopener noreferrer" 
              href="#" 
              className="btn px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border rounded border-2 border-[#95adbe] bg-[#f0eff4]"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
          {/* Updated image with responsive visibility classes */}
          <img 
           src="https://i.pravatar.cc/300"
            alt="Business" 
            className="img-hero object-contain h-64 sm:h-72 lg:h-80 xl:h-96 2xl:h-112 animate-up-down "
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
