import React, { useState, useEffect } from 'react';
import logo from '../assets/image.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="AIG Hospitals Logo" className="h-8 mr-3" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="/#events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
          <a href="/#about-us" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
        </nav>

        {/* Hamburger Icon */}
        <button className="md:hidden text-gray-700 text-xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <button className="self-end text-gray-600 text-2xl" onClick={toggleMenu}>
            <FaTimes />
          </button>
          <a href="/" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</a>
          <a href="/#events" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Events</a>
          <a href="/#about-us" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About Us</a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
