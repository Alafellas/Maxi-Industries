import React from "react";
import "../index.css";
import Aboutimg from '../assets/images/maxi industries.jpg'

const About = () => (
  <section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={Aboutimg}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg text-gray-700 mb-6">
          Maxi Industries is a professional manufacturer engaged in the research and development, 
          production, sales, and service of insecticides, mosquito coils, fly coils, and electric mosquito coil liquids. 
          We have over 10 years of experience in the production of daily chemical products. 
          The company has advanced production equipment, professional operators, and a research and development team.
          Our products sell well in multiple cities across the country.
          Adhering to the principle of mutual benefit, 
          we enjoy a good reputation among our customers with perfect service, high-quality products, 
          and competitive prices. We sincerely welcome friends from all over the world to visit our company and cooperate with us. 
          Looking forward to your consultation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
