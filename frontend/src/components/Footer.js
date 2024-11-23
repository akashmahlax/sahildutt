// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">About Sahil</h4>
          <p>
            I’m a WordPress developer with years of experience creating custom
            themes, plugins, and optimized websites tailored to clients' needs.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-yellow-500">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Me</h4>
          <p>Email: sahildutt@example.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Chandigarh, India</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="/"
              className="text-yellow-500 hover:text-yellow-600 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="/"
              className="text-yellow-500 hover:text-yellow-600 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="/"
              className="text-yellow-500 hover:text-yellow-600 transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Sahil Dutt. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
