// pages/Contact.jsx
import React from "react";

const Contact = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-lg text-gray-300 mb-8">
        Have a project in mind? I’d love to hear from you!
      </p>
      <form className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-full p-4 border border-gray-300 rounded-lg mt-6 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300 mt-6"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;