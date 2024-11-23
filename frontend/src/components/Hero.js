// components/Hero.jsx
import React from "react";

const Hero = () => (
  <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Sahil Dutt</h1>
        <p className="text-lg text-gray-300 mb-6">
          Crafting elegant and performance-driven WordPress websites for
          businesses and creatives worldwide.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Let’s Build Your Website
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://via.placeholder.com/500x400"
          alt="WordPress Development"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;