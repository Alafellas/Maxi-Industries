import React from "react";
import "../index.css";

const Header = () => (
  <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="text-2xl font-bold">MAXI Industries</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
