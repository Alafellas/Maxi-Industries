import React from "react";
import "../index.css";


const Hero = () => (
  <section
    id="home"
    className="bg-cover bg-center h-screen flex items-center justify-center text-center"
    style={{ backgroundImage: "url('https://www.industrias-maxi.es/imagenes/fachadamaxi.jpg')" }}
  >
    <div className="text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Building Your Future</h1>
      <p className="text-lg md:text-2xl mb-6">
        We design and construct spaces that inspire and endure.
      </p>
      <a
        href="#services"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600"
      >
        Our Services
      </a>
    </div>
  </section>
);

export default Hero;
