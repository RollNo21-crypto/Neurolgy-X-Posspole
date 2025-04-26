import React, { useState, useEffect } from 'react';
import logo from '../assets/image.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
      
      <div className="flex items-center">
      <Link to="/">
            <img src={logo} alt="AIG Hospitals Logo" className="h-8 mr-3" />
          </Link>
          {/* <div>
            <h1 className="font-bold text-xl md:text-2xl text-blue-700">AIG Hospitals</h1>
            <p className="text-xs text-gray-600">Advanced Medical Excellence</p>
          </div> */}
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6 mr-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="/#events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
            <a href="/#about-us" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
          </nav>
          
          <a
            href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-md inline-block"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;