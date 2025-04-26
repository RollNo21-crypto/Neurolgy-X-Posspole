import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Posspole</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Posspole is a Global Business Eco system creating innovative products,
            manufacturing and commercialising in the high growth sectors viz, Defence,
            Aerospace, Energy, Mobility, Health care, Telecom and Sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              To provide world-class medical training and education that empowers healthcare professionals to deliver exceptional patient care through innovative techniques and approaches.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Team</h3>
            <p className="text-gray-600">
              Our team consists of experienced medical professionals, educators, and event organizers dedicated to creating valuable learning experiences for the medical community.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Approach</h3>
            <p className="text-gray-600">
              We believe in hands-on, practical training that combines theoretical knowledge with real-world application, allowing participants to develop and refine their skills in a supportive environment.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Posspole?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Expert faculty from leading medical institutions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">State-of-the-art facilities and equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Hands-on practical sessions with personalized guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Comprehensive curriculum covering latest techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Networking opportunities with industry leaders</span>
                </li>
              </ul>
            </div>
            <div className="bg-[url('https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center h-full min-h-[300px]"></div>
          </div>
        </div>
              
      </div>
      <div className="max-w-4xl mx-auto text-center py-8">

      <div className="flex gap-4"></div>

              <a
                href="https://www.posspole.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md inline-block"
                >
                Know More
                <ArrowRight className="ml-2 inline-block" />
                </a>
        </div>
    </section>
  );
};

export default AboutUs;