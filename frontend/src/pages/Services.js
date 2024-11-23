// pages/Services.jsx
import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => (
  <section className="py-16 px-4 bg-gray-100 text-gray-900">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Custom WordPress Development"
          description="Tailor-made websites built to your specifications."
        />
        <ServiceCard
          title="E-commerce Solutions"
          description="Robust WooCommerce setups to sell online seamlessly."
        />
        <ServiceCard
          title="Website Maintenance"
          description="Keep your website running smoothly with regular updates."
        />
      </div>
    </div>
  </section>
);

export default Services;