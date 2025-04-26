import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, MapPin, Clock, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../../assets/image.png'; // Import the image for the registration section
import baxterLogo from '../../assets/sanma.png';
import supporter2 from '../../assets/medix.png';
import item1 from '../../assets/image 2 - vac.jpg';
import item2 from '../../assets/image 1 - vac.png';
import item3 from '../../assets/multisurgicle.jpg';
import Schedule from '../../components/neurosurgery/Schedule';
import WhoAre from '../../components/WhoArePosspole';
import Registration from '../../components/neurosurgery/Registration';

const NeurosurgeryWorkshop2025: React.FC = () => {
  // Event specific data
  const event = {
    id: 'neurosurgery-workshop-2025',
    title: 'Hands-on Workshop to Navigate Challenges in Neurosurgical Procedures',
    date: 'May 14th, 2025',
    location: 'Posspole, Bengaluru',
    description: 'A comprehensive hands-on workshop designed for neurosurgeons to master microvascular anastomosis techniques and navigate surgical challenges.',
    imageUrl: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'upcoming',
    type: 'Microvascular Anastomosis Workshop',
  };

  // Event specific schedule
  const schedule = [
    { time: '09:00 AM - 09:30 AM', activity: 'Inauguration' },
    { time: '09:30 AM - 10:00 AM', activity: 'Lecture & Surgical Video Presentation by Dr. Dwaraknath' },
    { time: '10:00 AM - 10:30 AM', activity: 'Lecture & Surgical Video Presentation by Dr. Satish Sathyanarayana' },
    { time: '10:30 AM - 11:00 AM', activity: 'Lecture & Surgical Video Presentation by Dr. Iype Cherian' },
    { time: '11:00 AM - 11:15 AM', activity: 'Coffee / Tea Break' },
    { time: '11:15 AM - 01:00 PM', activity: 'Hands On Session' },
    { time: '01:00 PM - 01:45 PM', activity: 'Lunch Break' },
    { time: '01:45 PM - 05:00 PM', activity: 'Hands On Session' },
    { time: '05:00 PM - 05:15 PM', activity: 'Vote of Thanks' }
  ];

  // Event specific highlights
  const highlights = [
    'Comprehensive hands-on experience in Understanding Instruments and Sutures',
    'Beyond flow mindset and Ultramicroneurosurgery for anastomosis',
    'Basic techniques for End to end and end to side Anastomosis',
    'Nuances and Common mistakes as well as how to handle them',
    'Network with leading experts in neurosurgery'
  ];

  // Event specific faculty
  const faculty = [
    {
      name: 'Dr. Dwaraknath',
      role: 'Senior Neurosurgeon',
      bio: 'Dr. Dwaraknath is a renowned neurosurgeon with over 20 years of experience in microvascular anastomosis techniques.'
    },
    {
      name: 'Dr. Satish Sathyanarayana',
      role: 'Neurosurgery Specialist',
      bio: 'Dr. Satish specializes in complex neurosurgical procedures and has conducted numerous workshops worldwide.'
    },
    {
      name: 'Dr. Iype Cherian',
      role: 'Professor of Neurosurgery',
      bio: 'Dr. Iype is a distinguished professor and practitioner known for his innovative approaches to neurosurgical challenges.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${event.imageUrl})` }}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Events
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {event.date} • {event.location}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                {event.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {event.description}
              </p>
              
              <a
                href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md inline-block"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
        
        {/* Event Details */}
        <section className="py-16 md:py-24 bg-white">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

            
            {/* Event Content Grid */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event Highlights - Left Side */}
            <div className="h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Attend?</h3>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl h-full">
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
            
            {/* Organization Section - Right Side */}
            <div className="h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Organizers</h3>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl h-full">
                <div className="flex flex-col h-full">
                  <img 
                    src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Medical Workshop"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    {/* Organized by */}
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Organized by</h4>
                      <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          <img
                            src={img}
                            alt="Posspole Logo"
                            className="h-16 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Supported by */}
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Supported by</h4>
                      <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-4">
                        <div className="flex items-center justify-center">
                          <img
                            src={baxterLogo}
                            alt="Sanma Logo"
                            className="h-16 object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <img
                            src={supporter2}
                            alt="Medix Logo"
                            className="h-16 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4"></div>
                      {/* Devices & Instruments Section */}
                      <div className="mb-16">
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
                                src={item1} 
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
                      
            
            
            {/* Schedule Component */}
            <Schedule />
            
            {/* Faculty */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Event <span className="text-blue-600">Faculty</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {faculty.map((person, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{person.name}</h3>
                    <p className="text-blue-600 mb-4">{person.role}</p>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Component */}
        <Registration />
        <WhoAre />
      </main>
      <Footer />
    </div>
  );
};

export default NeurosurgeryWorkshop2025;