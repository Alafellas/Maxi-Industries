import React from "react";
import "../index.css";


const Hero = () => (
  <section
    id="home"
    className="bg-cover bg-center h-screen flex items-center justify-center text-center"
    style={{ backgroundImage: "url('https://www.industrias-maxi.es/imagenes/fachadamaxi.jpg')" }}
  >
    <div className=" w-full h-[300px] flex items-center justify-center bg-black/50 text-white text-center">
  <div>
    <h1 className="text-5xl font-bold text-blue-500 h-20">Your Trusted Shield Against Pests</h1>
    <p className="text-3xl font-bold">We develop solutions that safeguard your environment and ensure a pest-free future.</p>
  </div>
</div>
  </section>
);

export default Hero;
