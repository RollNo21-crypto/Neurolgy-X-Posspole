import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Workshop Venue</h3>
            <p className="opacity-70 mb-6">
              Join us at AIG Hospitals for this comprehensive hands-on workshop in neurosurgery.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">AIG Hospitals, Hyderabad, India</span>
              </div>
              <div className="flex">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">+91 (800) 123-4567</span>
              </div>
              <div className="flex">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">workshop@aighospitals.com</span>
              </div>
              <div className="flex">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" />
                <span className="opacity-70">Saturday, May 10th, 2025: 8:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.410757920047!2d78.55062661487657!3d17.385936988087097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9978d6f6b0c9%3A0x7f8e2b44e12bc35f!2sAIG%20Hospitals!5e0!3m2!1sen!2sin!4v1647887842012!5m2!1sen!2sin"
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
            &copy; {new Date().getFullYear()} AIG Hospitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;