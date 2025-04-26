import React from 'react';
import { Calendar, MapPin, Clock, Award } from 'lucide-react';

interface EventDetailsProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
    category?: string;
    type: string;
  };
  highlights: string[];
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, highlights }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About the <span className="text-blue-600">Workshop</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {event.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">8:30 AM - 6:30 PM</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Venue</h3>
            <p className="text-gray-600">{event.location.split(',')[0]}</p>
            <p className="text-gray-600">{event.location.split(',')[1] || 'India'}</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Award className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Type</h3>
            <p className="text-gray-600">{event.type}</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Status</h3>
            <p className="text-gray-600">Registration Open</p>
          </div>
        </div>
        
        {/* Event Highlights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Event Highlights</h2>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;