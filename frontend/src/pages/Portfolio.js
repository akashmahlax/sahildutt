// pages/Portfolio.jsx
import React from "react";

const PortfolioItem = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Portfolio = () => (
  <section className="py-16 px-4 bg-gray-100 text-gray-900">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PortfolioItem
          title="E-commerce Website"
          description="An elegant WooCommerce store for a premium clothing brand."
          image="https://via.placeholder.com/400x300"
        />
        <PortfolioItem
          title="Business Website"
          description="A corporate website with advanced booking features."
          image="https://via.placeholder.com/400x300"
        />
        <PortfolioItem
          title="Blog Platform"
          description="A customized blogging platform for content creators."
          image="https://via.placeholder.com/400x300"
        />
      </div>
    </div>
  </section>
);

export default Portfolio;