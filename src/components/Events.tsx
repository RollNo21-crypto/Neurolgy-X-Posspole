import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define our own event type without relying on eventData
interface EventInfo {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: 'upcoming' | 'current' | 'past';
  type: string;
  path: string;
}

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'current' | 'past'>('all');
  
  // Hardcoded events data instead of using eventData
  const events: EventInfo[] = [
    {
      id: 'urosurgery-workshop-2025',
      title: 'AI in Urology and Robotic Surgery Symposium',
      date: 'May 13th, 2025',
      description: 'Explore the latest innovations in AI-driven diagnostics, robotic surgery, and surgical education.',
      imageUrl: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'upcoming',
      type: 'Workshop',
      path: '/event/urosurgery-workshop-2025'
    },
    // {
    //   id: 'neurology-conference-2024',
    //   title: 'Advanced Neurological Disorders Conference',
    //   date: 'May 13th, 2025',
    //   description: 'Join leading neurologists to discuss the latest advancements in treating neurological disorders.',
    //   imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    //   category: 'upcoming',
    //   type: 'Conference',
    //   path: '/event/neurology-conference-2024'
    // },
    // {
    //   id: 'brain-tumor-workshop-2024',
    //   title: 'Brain Tumor Surgery Techniques Workshop',
    //   date: 'August 5th, 2024',
    //   description: 'A hands-on workshop focused on advanced techniques for brain tumor surgeries.',
    //   imageUrl: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600',
    //   category: 'current',
    //   type: 'Surgical Workshop',
    //   path: '/event/brain-tumor-workshop-2024'
    // },
    // {
    //   id: 'spine-surgery-2024',
    //   title: 'Minimally Invasive Spine Surgery Workshop',
    //   date: 'March 15th, 2024',
    //   description: 'Learn the latest techniques in minimally invasive spine surgeries from expert surgeons.',
    //   imageUrl: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600',
    //   category: 'past',
    //   type: 'Surgical Workshop',
    //   path: '/event/spine-surgery-2024'
    // },
    {
      id: 'neurology-workshop-2025',
      title: 'Hands-on Workshop to Navigate Challenges in Neurosurgical Procedures',
      date: 'May 14th, 2025',
      description: 'A comprehensive hands-on workshop designed for Neurosurgeons to master microvascular anastomosis techniques and navigate surgical challenges.',
      imageUrl: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'upcoming',
      type: 'Artificial Intelligence',
      path: '/event/neurology-workshop-2025'
    }
  ];
  
  // Filter events based on the active tab
  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(event => event.category === activeTab);

  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Expolre Flagship <span className="text-blue-600">Events</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Discover Events That Inspire, Educate, and Connect Medical Professionals
          </p>
        </div>

        {/* Event Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Events
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'current'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('current')}
            >
              Current
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="text-blue-600 w-4 h-4 mr-2" />
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {event.type}
                  </span>
                  <Link 
                    to={event.path} 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;