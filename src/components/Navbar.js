// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-20 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">A1 Reno's Pro</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="material-icons">menu</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center">
          <Link to="/" className="block py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2" onClick={toggleMenu}>About</Link>
          <Link to="/services" className="block py-2" onClick={toggleMenu}>Services</Link>
          <Link to="/projects" className="block py-2" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="block py-2" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;