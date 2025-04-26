import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, MapPin, Clock, Award, ArrowLeft, Microscope, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrainTumorWorkshop2024: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Custom design for brain tumor workshop */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" 
               style={{ backgroundImage: `url(https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Events
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                August 5th, 2024 • Posspole, Bengaluru
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Brain Tumor Surgery Techniques Workshop
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                A hands-on workshop focused on advanced techniques for brain tumor surgeries.
              </p>
              
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md">
                <span className="font-medium">Current Event</span> - This workshop is currently in progress
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshop Overview - Custom section for this event */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Workshop Overview</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  This intensive workshop provides neurosurgeons with hands-on training in the latest techniques for brain tumor removal, focusing on precision, safety, and patient outcomes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Microscope className="text-red-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Precision Techniques</h3>
                  <p className="text-gray-600">
                    Learn microsurgical approaches that maximize tumor removal while preserving critical brain structures.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Brain className="text-red-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Advanced Imaging</h3>
                  <p className="text-gray-600">
                    Explore the latest in intraoperative imaging and navigation systems for precise tumor localization.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="text-red-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Faculty</h3>
                  <p className="text-gray-600">
                    Train under renowned neurosurgeons specializing in complex brain tumor surgeries.
                  </p>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="text-red-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
                  <p className="text-gray-600">August 5th, 2024</p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="text-red-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Venue</h3>
                  <p className="text-gray-600">Posspole</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="text-red-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Type</h3>
                  <p className="text-gray-600">Surgical Workshop</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Clock className="text-red-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Status</h3>
                  <p className="text-gray-600">Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshop Content - Custom section for this event */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Workshop Content</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A comprehensive curriculum covering all aspects of modern brain tumor surgery.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Topics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Preoperative Planning</h4>
                      <p className="text-gray-600">Advanced imaging interpretation and surgical approach selection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Microsurgical Techniques</h4>
                      <p className="text-gray-600">Precision dissection and tumor removal strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Intraoperative Monitoring</h4>
                      <p className="text-gray-600">Neurophysiological monitoring to preserve function</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Awake Craniotomy</h4>
                      <p className="text-gray-600">Techniques for tumors in eloquent brain regions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Endoscopic Approaches</h4>
                      <p className="text-gray-600">Minimally invasive techniques for selected tumors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Complication Management</h4>
                      <p className="text-gray-600">Strategies to prevent and manage surgical complications</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Workshop Format</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-red-700">Morning Session</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span>Didactic lectures on surgical principles</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span>Video demonstrations of surgical techniques</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span>Case-based discussions of complex tumors</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-red-700">Afternoon Session</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span>Hands-on simulation with high-fidelity models</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span>Practical exercises with surgical instruments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span>Faculty-supervised practice sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Live Updates - Custom section for this current event */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Live Workshop Updates</h2>
              <p className="text-xl opacity-90 mb-8">
                Follow the latest updates from our ongoing brain tumor surgery workshop.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
                <div className="text-left space-y-6">
                  <div className="border-l-4 border-white pl-4">
                    <p className="italic mb-2">"Dr. Sharma is currently demonstrating the use of fluorescence-guided surgery for high-grade gliomas. Participants are engaged in a lively Q&A session."</p>
                    <p className="text-sm opacity-75">Posted 2 hours ago</p>
                  </div>
                  
                  <div className="border-l-4 border-white pl-4">
                    <p className="italic mb-2">"The morning session on advanced neuroimaging for surgical planning has concluded. Participants are now breaking for lunch before the hands-on portion begins."</p>
                    <p className="text-sm opacity-75">Posted 4 hours ago</p>
                  </div>
                  
                  <div className="border-l-4 border-white pl-4">
                    <p className="italic mb-2">"Workshop has officially begun with an opening address on the evolution of brain tumor surgery techniques over the past decade."</p>
                    <p className="text-sm opacity-75">Posted 6 hours ago</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm opacity-80">
                For those unable to attend, a comprehensive workshop summary and selected recordings will be available next week.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrainTumorWorkshop2024;