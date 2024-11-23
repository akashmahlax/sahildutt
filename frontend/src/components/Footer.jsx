// components/Footer.jsx


import { NavLink } from "react-router-dom";

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Sahil Dutt</h3>
          <p>
            Expert WordPress developer delivering performance-driven websites for
            businesses and individuals worldwide.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-400"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Me</h3>
          <p>Phone: +91 98765 43210</p>
          <p>Email: sahil@wordpressdev.com</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Sahil Dutt. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export default Footer;  