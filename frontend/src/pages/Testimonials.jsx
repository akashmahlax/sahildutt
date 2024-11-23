// pages/Testimonials.jsx
import React from "react";

const TestimonialCard = ({ name, review, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full mx-auto mb-4"
    />
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-600 mt-4">"{review}"</p>
  </div>
);

const Testimonials = () => (
  <section className="py-16 px-4 bg-gray-100 text-gray-900">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">What My Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard
          name="John Doe"
          review="Sahil transformed our online presence with a stunning WordPress site. Highly recommend!"
          image="https://via.placeholder.com/100"
        />
        <TestimonialCard
          name="Jane Smith"
          review="Amazing work! My blog looks professional and loads super fast."
          image="https://via.placeholder.com/100"
        />
        <TestimonialCard
          name="David Lee"
          review="Great experience working with Sahil. Very knowledgeable and creative."
          image="https://via.placeholder.com/100"
        />
      </div>
    </div>
  </section>
);

export default Testimonials;