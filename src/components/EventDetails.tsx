import React from 'react';
import { Calendar, MapPin, Clock, Award } from 'lucide-react';
import aig1 from '../assets/image.png';
import supporter2 from '../assets/medix.png';
import baxterLogo from '../assets/sanma.png';
import item1 from '../assets/image 2 - vac.jpg';
import item2 from '../assets/image 1 - vac.png';
import item3 from '../assets/multisurgicle.jpg';

const EventDetails: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About the <span className="text-blue-600">Workshop</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive hands-on workshop designed for neurosurgeons to master microvascular anastomosis techniques and navigate surgical challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
            <p className="text-gray-600">Tuesday, May 14th, 2025</p>
            <p className="text-gray-600">8:30 AM - 6:30 PM</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Venue</h3>
            <p className="text-gray-600">Posspole</p>
            <p className="text-gray-600">Bengaluru, India</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Award className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Type</h3>
            <p className="text-gray-600">Microvascular</p>
            <p className="text-gray-600">Anastomosis Workshop</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-600">Full-day Workshop</p>
            <p className="text-gray-600">With Practical Sessions</p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Attend?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3 text-gray-700">Comprehensive hands-on experience in Understanding Instruments and Sutures
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3 text-gray-700">Beyond flow mindset and Ultramicroneurosurgery for anastomosis</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3 text-gray-700">Basic techniques for End to end and end to side Anastomosis</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3 text-gray-700">Nuances and Common mistakes as well as how to handle them</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3 text-gray-700">Network with leading experts in neurosurgery</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
              <div className="flex flex-col h-full">
                <img 
                  src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Medical Workshop"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Organized by */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-4">Organized by</h4>
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <img
                        src={aig1}
                        alt="Aig Logo"
                        className="h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Supported by */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-4">Supported by</h4>
                    <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={baxterLogo}
                          alt="Baxter Logo"
                          className="h-16 object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <img
                          src={supporter2}
                          alt="Supporter 2"
                          className="h-16 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Devices & Instruments Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Devices & <span className="text-blue-600">Instruments</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and instruments provided for each participant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src= {item1} 
                  alt="Exoscope" 
                  className="h-48 w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Exoscope</h3>
              <p className="text-gray-600 text-center">
                Advanced digital surgical visualization system for enhanced precision and teaching capabilities
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src={item2} 
                  alt="Surgical Operating Microscope" 
                  className="h-48 w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Surgical Operating Microscope</h3>
              <p className="text-gray-600 text-center">
                Individual microscopes for each participant ensuring optimal visualization during procedures
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src={item3} 
                  alt="Micro-Surgical Instruments" 
                  className="h-48 w-32 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Micro-Surgical Instruments</h3>
              <p className="text-gray-600 text-center">
                Complete set of precision instruments for performing delicate microsurgical procedures
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <blockquote className="text-xl italic text-gray-700">
              "You cannot teach a man anything; you can only help him find it within himself"
            </blockquote>
            <p className="mt-4 text-gray-600">- Galileo Galilei</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;