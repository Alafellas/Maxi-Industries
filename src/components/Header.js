import React, { useState } from "react";
import "../index.css";
import "./Footer.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <ul>
          <li>
          <div className="text-4xl font-bold tracking-extra">MAXI</div>
          </li>
          <li>
        <div className="text-2xl text-maxiColor font-helvetica">Industries</div>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          className="block md:hidden text-3xl focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 w-3/4 h-full bg-gray-800 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out md:relative md:translate-x-0 md:flex md:w-auto md:bg-transparent z-40`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left mt-16 md:mt-0">
            <li className="py-4 md:py-0">
              <a
                href="#home"
                className="block text-white  font-bold hover:text-maxiColor"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Home
              </a>
            </li>
            <li className="py-4 md:py-0">
              <a
                href="#about"
                className="block text-white  font-bold hover:text-maxiColor"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                About
              </a>
            </li>
            <li className="py-4 md:py-0">
              <a
                href="#services"
                className="block text-white  font-bold hover:text-maxiColor"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Services
              </a>
            </li>
            <li className="py-4 md:py-0">
              <a
                href="#footer"
                className="block text-white  font-bold hover:text-maxiColor"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Overlay for Mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
