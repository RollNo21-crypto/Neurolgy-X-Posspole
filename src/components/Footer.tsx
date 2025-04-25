import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="opacity-70 mb-6">
              POSSPOLE PVT LTD
            </p>
            <div className="space-y-4">
              <div className="flex">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">Krishi Bhavan, Cubbon Park Rd, Nunegundlapalli, Ambedkar Veedhi, Bengaluru - 560001, India</span>
              </div>
              <div className="flex">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">+91 86181 45049</span>
              </div>
              <div className="flex">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">kiran@posspole.com</span>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0601188448873!2d77.5856932748413!3d12.968004887347012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1739d40ce5c9%3A0xec1860d98ab0d356!2sPOSSPOLE!5e0!3m2!1sen!2sin!4v1745560788907!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="opacity-70 text-sm">
            &copy; {new Date().getFullYear()} Posspole Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;