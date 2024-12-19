import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          IMDB
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-400 hover:text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
