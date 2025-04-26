// import React from 'react';
// import { ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface HeroProps {
//   event: {
//     id: string;
//     title: string;
//     date: string;
//     location: string;
//     description: string;
//     imageUrl: string;
//     category?: string;
//     type: string;
//   };
// }

// const Hero: React.FC<HeroProps> = ({ event }) => {
//   return (
//     <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
//       <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${event.imageUrl})` }}></div>
      
//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
//           <ArrowLeft className="w-4 h-4 mr-1" />
//           Back to Events
//         </Link>
        
//         <div className="max-w-4xl mx-auto">
//           <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//             {event.date} • {event.location}
//           </div>
          
//           <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
//             {event.title}
//           </h1>
          
//           <p className="text-lg md:text-xl text-gray-600 mb-8">
//             {event.description}
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md inline-block"
//             >
//               Register Now
//             </a>
//             <a 
//               href="#schedule" 
//               className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-all inline-block"
//             >
//               View Schedule
//             </a>
//           </div>
          
//           <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//                 <span className="text-blue-600 font-semibold">1</span>
//               </div>
//               <span className="ml-3 text-gray-700">Practical Workshop</span>
//             </div>
            
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//                 <span className="text-blue-600 font-semibold">8</span>
//               </div>
//               <span className="ml-3 text-gray-700">Hours Training</span>
//             </div>
            
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//                 <span className="text-blue-600 font-semibold">3</span>
//               </div>
//               <span className="ml-3 text-gray-700">Expert Faculty</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-pulse">
            May 14th, 2025 • Posspole, Bengaluru
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Hands-on Workshop to Navigate Challenges in 
            <span className="text-blue-600"> Neurosurgical Procedures</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A comprehensive hands-on workshop designed for neurosurgeons to master microvascular anastomosis techniques and navigate surgical challenges
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md"
            >
              Register Now
            </a>
            <a 
              href="#schedule" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-all"
            >
              View Schedule
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <span className="ml-3 text-gray-700">Practical Workshop</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-blue-600 font-semibold">8</span>
              </div>
              <span className="ml-3 text-gray-700">Hours Training</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <span className="ml-3 text-gray-700">Expert Faculty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;