import React from "react";
import { faCoffee, faTwitter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">MAXI Industries</h2>
          <p className="mt-2 text-gray-400">
            Innovating for a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="#home"
                className="mt-4 text-gray-400 hover:text-yellow-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className=" mt-4 text-gray-400 hover:text-yellow-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="mt-4 text-gray-400 hover:text-yellow-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mt-4 text-gray-400 hover:text-yellow-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Copyright */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex space-y-4 mt-4 text-gray-400">
            Ain Melsa, Sétif, Algeria
          </p>
          <p className="mt-4 text-gray-400">Phone: +231 (0) 770 774 078</p>
          <p className="mt-4 text-gray-400">contact@maxi-ind.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61567841761838"
              target="_blank"
              className="mt-4 text-gray-400 hover:text-yellow-500"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/maxi-ind/about/"
              target="_blank"
              className="mt-4 text-gray-400 hover:text-yellow-500"
            >
              {" "}
              LinkedIn
            </a>
          </div>
          <div className="mt-4 text-gray-400">
            &copy; 2025 MAXI Industries. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
