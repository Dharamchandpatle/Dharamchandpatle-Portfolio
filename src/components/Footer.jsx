import React from 'react';

const Footer = () => {
  return (
    <section className="bg-[#f0eff4] text-[#000] py-9">
      <div className="flex items-center justify-center text-center">
        <div>
          {/* Profile Image Section */}
          <div className="flex justify-center pb-4">
            <img
              src="Dharamchand3.jpg"
              alt="Dharamchand Patle"
              className="w-24 h-24 shadow-lg rounded-full border-4 border-[#95adbe] shadow-[#fe9901]"
            />
          </div>

          {/* Name and Copyright Section */}
          <h3 className="font-bold text-2xl">Dharamchand Patle</h3>
          <h4 className="font-bold">
            Copyright©2024
            <a href="#home" className="text-[#95adbe] ml-1">
              Dharamchand Patle
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
