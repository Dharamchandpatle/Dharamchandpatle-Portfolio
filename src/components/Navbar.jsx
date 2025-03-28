import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active link

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Handle link click
  const handleLinkClick = (index) => {
    setActiveIndex(index); // Update the active index on click
    if (isSidebarOpen) {
      toggleSidebar(); // Close the sidebar if open
    }
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Why Choose Me?", to: "/whychooseme" },
    { name: "My Works", to: "/myworks" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-white border-2 border-gray-300 font-serif">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo and Brand Name */}
        <NavLink to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black hover:text-[#95adbe]">
            <span className="text-orange-500">Dharam's</span> Dev
          </span>
        </NavLink>

        {/* Navbar Links */}
        <div className="flex-1 hidden md:flex items-center text-lg justify-center space-x-8 font-bold relative">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <NavLink
                className={`text-[#000]  ${activeIndex === index ? "font-bold" : ""}`}
                to ={item.to}
                onClick={() => handleLinkClick(index)}
              >
                {item.name}
              </NavLink>
              {/* Animated Bottom Border */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#fe9901] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activeIndex === index ? "scale-x-100" : ""}`} />
            </div>
          ))}
        </div>

        {/* Profile Image and Hamburger Menu Button */}
        <div className="flex items-center space-x-3">
          <img
            className="h-8 w-8 rounded-full"
            src='images/Dharamchand3.jpg'
            alt="User Avatar"
          />
          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-700 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 z-50 w-64 p-4 bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button
            onClick={toggleSidebar}
            className="text-black text-2xl mb-4 focus:outline-none"
          >
            X
          </button>
          <ul className="space-y-4 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className="hover:text-gray-500"
                  onClick={() => handleLinkClick(index)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
