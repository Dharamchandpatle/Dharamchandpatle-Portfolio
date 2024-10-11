import React, { useState } from 'react';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare, FaSearch, FaYoutube } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`You searched for: ${searchQuery}`);
    // Here, you can add the actual search functionality, e.g., filtering results
  };

  return (
    <header className="bg-[#ffffff] pt-5  font-bold font-serif">
      <nav className="nav flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 lg:px-12 pb-4">
        {/* Media Icons */}
        <ul className="media-icon flex items-center gap-4">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 shadow-lg border-[#95adbe] text-[#000] bg-[#ffffff] hover:bg-[#95adbe] hover:text-[#ffffff] flex items-center justify-center w-10 h-10"
              href="https://www.linkedin.com/in/dharamchand-patle-web-developer-802413282/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full shadow-lg border-2 border-[#95adbe] text-[#000] bg-[#ffffff] hover:bg-[#95adbe] hover:text-[#ffffff] flex items-center justify-center w-10 h-10"
              href="https://github.com/"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full shadow-lg border-2 border-[#95adbe] text-[#000] bg-[#ffffff] hover:bg-[#95adbe] hover:text-[#ffffff] flex items-center justify-center w-10 h-10"
              href="https://www.youtube.com/@DharamsCodeMystery7"
            >
              <FaYoutube />

            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full shadow-lg border-2 border-[#95adbe] text-[#000] bg-[#ffffff] hover:bg-[#95adbe] hover:text-[#ffffff] flex items-center justify-center w-10 h-10"
              href="https://www.instagram.com/dharamcodemystery7/?next=%2F"
            >
              <FaInstagramSquare />
            </a>
          </li>
        </ul>

        {/* Logo / Title */}
        <div className="text-center font-serif md:flex-grow">
          <h2 className="text-xl md:text-3xl font-bold text-[#fe9901]">
            <span className="font-bold uppercase text-[#000]">Dharamchand </span>Patle
          </h2>
          <h6 className="tracking-[.20em] uppercase text-xs md:text-sm">
            MERN Stack Web Designer
          </h6>
        </div>

        {/* Search Bar */}
        <div className="search flex items-center hidden lg:flex">
          <input
            type="text"
            className="search-input border border-[#95adbe] rounded-full px-4 py-2 text-[#000] focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="search-button shadow-lg rounded-full border-2 border-[#95adbe] text-[#000] bg-[#ffffff] hover:bg-[#95adbe] hover:text-[#ffffff] flex items-center justify-center w-10 h-10 ml-2"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
