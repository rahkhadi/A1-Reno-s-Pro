// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/kitchen.jpeg')" }}>
      <div className="text-center text-white bg-black bg-opacity-60 p-6 md:p-10 rounded-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">A1 Reno's Pro: Your Renovation Experts</h2>
        <p className="text-lg md:text-xl mb-6">Making Your Dream Home a Reality</p>
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Get a Free Quote</a>
      </div>
    </section>
  );
}

export default Hero;