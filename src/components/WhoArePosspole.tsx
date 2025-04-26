import React from 'react';
import { ArrowRight } from 'lucide-react';
const WhoArePosspole: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Who Are Posspole
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Posspole is a Global Business Eco system creating innovative products,
            manufacturing and commercialising in the high growth sectors viz, Defence,
            Aerospace, Energy, Mobility, Health care, Telecom and Sustainability.
          </p>
          
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
      </div>
    </section>
  );
};

export default WhoArePosspole;