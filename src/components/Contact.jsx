import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';

const Contact = () => {
  return (
    <section className="py-24 bg-[#ffffff] text-[#000]" id="contact">
      <div className="flex items-center px-6 md:px-12 lg:px-24">
        <h2 className="text-xl font-semibold">
          <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]">06.</span> Contact Me
        </h2>
        <div className="flex items-center pl-3">
          <span className="block w-24 h-1 rounded bg-[#fe9901]"></span>
        </div>
      </div>
      <br />
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#fe9901]">D</span>haramchand{' '}
            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#95adbe]">P</span>atle
          </h1>
          <p className="pt-2 pb-4">Let’s connect and build modern web products powered by AI and smart automation.</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 sm:mr-6" />
              <span>Indore, Madhya Pradesh, India</span>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="tel:+916263821762" className="hover:text-[#fe9901]">+91-6263821762</a>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="mailto:dharamchandpatle917@gmail.com" className="hover:text-[#fe9901]">dharamchandpatle917@gmail.com</a>
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <a href="https://www.linkedin.com/in/dharamchand-fullstackdeveloper/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4c4c4c] hover:text-[#fe9901]">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Dharamchandpatle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4c4c4c] hover:text-[#fe9901]">
              <FaGithub /> GitHub
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4c4c4c] hover:text-[#fe9901]">
              <FaLinkedin /> LeetCode
            </a>
          </div>

          <div className="btn-box mt-6">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dharamchand-fullstackdeveloper/" className="inline-flex items-center btn px-5 sm:px-5 py-2 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-[#ffffff]">
              <HiOutlineLink className="inline-block mr-1" /> Connect on LinkedIn
            </a>
          </div>
        </div>

        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Enter your Name..."
              className="block w-full p-2 h-10 border-2 rounded-md shadow-sm focus:ring focus:ring-[#fe9901] bg-[#f5f4f0] text-[#000]"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="block w-full p-2 h-10 border-2 rounded-md shadow-sm focus:ring focus:ring-[#fe9901] bg-[#f5f4f0] text-[#000]"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="block w-full p-2 rounded-md border-2 focus:ring focus:ring-[#fe9901] bg-[#f5f4f0] text-[#000]"
            ></textarea>
          </label>
          <div className="btn-box mt-4">
            <button
              type="button"
              className="self-center btn px-4 sm:px-4 py-1 text-base sm:text-lg font-semibold rounded border-2 border-[#95adbe] bg-[#95adbe] text-[#ffffff]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
