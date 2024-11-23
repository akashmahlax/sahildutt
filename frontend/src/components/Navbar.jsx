// components/Navbar.jsx
import React from "react";

const Navbar = ({ setCurrentPage }) => (
  <nav className="bg-gray-900 text-white py-4 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
      <div className="text-xl font-bold">Sahil Dutt</div>
      <ul className="flex space-x-6">
        <li>
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-yellow-500 transition duration-300"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("about")}
            className="hover:text-yellow-500 transition duration-300"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("services")}
            className="hover:text-yellow-500 transition duration-300"
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("portfolio")}
            className="hover:text-yellow-500 transition duration-300"
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("contact")}
            className="hover:text-yellow-500 transition duration-300"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;