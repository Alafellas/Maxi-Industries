import React from "react";
import "../index.css";


const Hero = () => (
  <section
    id="home"
    className="bg-cover bg-center h-screen flex items-center justify-center text-center"
    style={{ backgroundImage: "url('https://www.industrias-maxi.es/imagenes/fachadamaxi.jpg')" }}
  >
    <div className="px-10">
      <h1 className=" text-maxiColor text-5xl md:text-6xl font-bold mb-4">Your Trusted Shield Against Pests</h1>
      <p className="text-white text-lg md:text-2xl mb-6 font-bold">
      We develop solutions that safeguard your environment and ensure a pest-free future.
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
