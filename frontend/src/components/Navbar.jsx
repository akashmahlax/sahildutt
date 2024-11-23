// components/Navbar.jsx
<<<<<<< HEAD
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
=======

import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white">
    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
      <Link to="/" className="text-2xl font-bold">
        Sahil Dutt
      </Link>
      <div className="hidden md:flex space-x-6">
        {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300 transition duration-300"
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
      <button className="md:hidden text-gray-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
>>>>>>> 9db45834d41818613897a13df2d4cbdbebcc2fc4
    </div>
  </nav>
);

export default Navbar;