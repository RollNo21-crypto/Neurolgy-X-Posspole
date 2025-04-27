import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  location?: string;
  registrationLink: string;
}

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroContent: HeroContent[] = [
    {
      title: 'Hands-on Workshop',
      subtitle: 'Neurosurgical Procedures',
      description: 'A comprehensive hands-on workshop designed for neurosurgeons to master microvascular anastomosis techniques.',
      date: 'May 14th, 2025',
      location: 'Posspole, Bengaluru',
      registrationLink: 'https://forms.gle/JMN2vpPXhb6Cfi9b7'
    },
    {
      title: 'Urology AI in Urology ',
      subtitle: '& Robotic Surgery Symposium',
      description: 'Join leading experts to explore cutting-edge advancements in AI applications and robotic technologies in urologic practice.',
      date: 'May 13th, 2025',
      location: 'Posspole, Bengaluru',
      registrationLink: 'https://forms.gle/YTN3Ma1rBUFxq3Bp9'
    }
    // {
    //   title: 'Advanced Techniques',
    //   subtitle: 'Surgical Excellence',
    //   description: 'Master the latest techniques in microvascular anastomosis and complex neurosurgical procedures.',
    //   date: 'May 14th, 2025',
    //   location: 'Posspole, Bengaluru',
    //   registrationLink: 'https://forms.gle/def789uvw012'
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {heroContent[currentIndex].date} • {heroContent[currentIndex].location}
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {heroContent[currentIndex].title}
              <span className="text-blue-600 block"> {heroContent[currentIndex].subtitle}</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {heroContent[currentIndex].description}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={heroContent[currentIndex].registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md inline-flex items-center justify-center"
              >
                Register Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-blue-200'}`}
            />
          ))}
        </div>

        {/* <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
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
        // </div> */}
      </div> 
    </section>
  );
};

export default Hero;