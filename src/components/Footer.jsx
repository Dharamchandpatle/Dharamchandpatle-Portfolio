import React from 'react';
import { NavLink } from 'react-router-dom';
// import Dharamchand3 from '../assets/images/Dharamchand3.jpg'

const Footer = () => {
  return (
    <section className="bg-[#f0eff4] text-[#000] py-2">
      <div className="flex items-center justify-center text-center">
        <div>
          {/* Profile Image Section */}
          <div className="flex justify-center pb-2">
            <img
            href="/"
              src='images/Dharamchand3.jpg'
              alt="Dharamchand Patle"
              className="w-24 h-24 shadow-lg rounded-full border-4 border-[#95adbe] shadow-[#fe9901]"
            />
          </div>

          {/* Name and Copyright Section */}
          <h3 className="font-bold text-2xl">Dharamchand Patle</h3>
          <h4 className="font-bold text-slate-800">
            Copyright©2024  Dharamchand Patle
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
