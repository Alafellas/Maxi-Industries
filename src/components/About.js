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
          Maxi Industries is a leading company specializing in the production of all types of insecticides. 
          The company's products are distinguished by their high quality and effectiveness, 
          manufactured using the latest technologies and global standards to ensure safe and sustainable pest control. 
          Maxi Industries is dedicated to meeting the needs of its customers, whether individuals or businesses,
           while committing to environmental preservation and providing 
          innovative solutions that protect public health and ensure user comfort
          </p>
          <p className="text-lg text-gray-700">
            From residential projects to large-scale commercial developments, we pride ourselves
            on our ability to exceed expectations and bring our clients' visions to life.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
