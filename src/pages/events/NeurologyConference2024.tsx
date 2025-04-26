import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, MapPin, Clock, Award, ArrowLeft, Users, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeurologyConference2024: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Custom design for neurology conference */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-purple-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" 
               style={{ backgroundImage: `url(https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Events
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                November 10th, 2024 • Posspole, Bengaluru
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Advanced Neurological Disorders Conference
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Join leading neurologists to discuss the latest advancements in treating neurological disorders.
              </p>
              
              <a
                href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md inline-block"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
        
        {/* Conference Overview - Custom section for this event */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Conference Overview</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A premier gathering of neurologists, neurosurgeons, and researchers to explore cutting-edge developments in neurological care.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="text-indigo-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Speakers</h3>
                  <p className="text-gray-600">
                    Learn from internationally recognized neurologists and researchers at the forefront of their fields.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <BookOpen className="text-indigo-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Latest Research</h3>
                  <p className="text-gray-600">
                    Discover groundbreaking research and clinical trials in neurological disorders treatment.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Lightbulb className="text-indigo-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Networking</h3>
                  <p className="text-gray-600">
                    Connect with peers and potential collaborators in an environment designed for meaningful exchange.
                  </p>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="text-indigo-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
                  <p className="text-gray-600">November 10th, 2024</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="text-indigo-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Venue</h3>
                  <p className="text-gray-600">Posspole</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="text-indigo-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Type</h3>
                  <p className="text-gray-600">Conference</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <Clock className="text-indigo-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Status</h3>
                  <p className="text-gray-600">Registration Open</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conference Topics - Custom section for this event */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Conference Topics</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore a wide range of topics at the forefront of neurological research and clinical practice.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-indigo-700">Clinical Neurology</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Advances in stroke management and rehabilitation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Novel approaches to neurodegenerative disorders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Epilepsy: New diagnostic and treatment modalities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Headache disorders: Classification and management</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-indigo-700">Neuroscience Research</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Neuroimaging breakthroughs and applications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Neurogenetics and personalized medicine</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Neuroimmunology and neuroinflammation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                      <span>Artificial intelligence in neurological diagnostics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Registration Information - Custom section for this event */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Us at the Conference</h2>
              <p className="text-xl opacity-90 mb-8">
                Limited seats available. Secure your place at this premier neurological disorders conference.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold">20+</div>
                    <div className="opacity-90">Expert Speakers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">8</div>
                    <div className="opacity-90">Panel Discussions</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">300+</div>
                    <div className="opacity-90">Expected Attendees</div>
                  </div>
                </div>
              </div>
              
              <a
                href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NeurologyConference2024;