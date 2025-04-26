import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, MapPin, Clock, Award, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpineSurgery2024: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Custom design for spine surgery workshop */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" 
               style={{ backgroundImage: `url(https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Events
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                March 15th, 2024 • Posspole, Bengaluru
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Minimally Invasive Spine Surgery Workshop
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Learn the latest techniques in minimally invasive spine surgeries from expert surgeons.
              </p>
              
              <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                <span className="font-medium">Past Event</span> - This workshop was held on March 15th, 2024
              </div>
            </div>
          </div>
        </section>
        
        {/* Event Details - Custom layout for this past workshop */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-emerald-50 p-6 rounded-xl mb-12">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Workshop Summary</h2>
                <p className="text-gray-700">
                  This workshop focused on minimally invasive techniques for spine surgery, emphasizing reduced patient recovery time 
                  and improved outcomes. Participants learned about endoscopic approaches, tubular retractor systems, and percutaneous 
                  fixation techniques through lectures, case discussions, and hands-on sessions with specialized equipment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Date</h3>
                  <p className="text-gray-600">March 15th, 2024</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Venue</h3>
                  <p className="text-gray-600">Posspole</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Type</h3>
                  <p className="text-gray-600">Surgical Workshop</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Clock className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Status</h3>
                  <p className="text-gray-600">Completed</p>
                </div>
              </div>
              
              {/* Workshop Highlights - Custom for this event */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">Workshop Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 text-emerald-700">What Participants Learned</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Endoscopic spine surgery techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Tubular retractor systems for minimally invasive access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Percutaneous fixation techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Patient selection criteria for minimally invasive approaches</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 text-emerald-700">Workshop Format</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Interactive lectures by spine surgery experts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Case discussions with complex spine pathologies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Hands-on sessions with specialized equipment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Live surgery demonstrations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Photo Gallery - Custom section for this event */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">Workshop Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Workshop Photo 1</span>
                  </div>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Workshop Photo 2</span>
                  </div>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Workshop Photo 3</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonials - Custom section for this event */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-gray-800">Participant Feedback</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <p className="text-gray-600 italic mb-4">
                      "The hands-on experience with the latest minimally invasive equipment was invaluable. I've already implemented some of the techniques in my practice."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-bold">DR</span>
                      </div>
                      <div>
                        <p className="font-medium">Dr. Rajesh Kumar</p>
                        <p className="text-sm text-gray-500">Spine Surgeon, Chennai</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <p className="text-gray-600 italic mb-4">
                      "Excellent faculty and well-organized sessions. The case discussions were particularly helpful in understanding patient selection criteria."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-bold">SM</span>
                      </div>
                      <div>
                        <p className="font-medium">Dr. Sunita Mehta</p>
                        <p className="text-sm text-gray-500">Neurosurgeon, Mumbai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpineSurgery2024;