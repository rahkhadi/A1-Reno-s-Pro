import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">A1 Reno's Pro</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;