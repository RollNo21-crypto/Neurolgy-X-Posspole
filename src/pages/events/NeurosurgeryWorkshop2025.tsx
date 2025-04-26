import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import { Calendar, Clock, MapPin, Users, Menu, X, Lightbulb, MessageSquare, Network, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../../assets/image.png';
import WhoAre from '../../components/WhoArePosspole';
import img1 from '../../assets/image (1).png';
import doc1 from '../../assets/1.png';
import doc2 from '../../assets/2.png';
import doc3 from '../../assets/3.png';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSession, setActiveSession] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const speakers = [
    {
      name: 'Dr. Justin Collins',
      title: 'Associate Professor',
      affiliation: 'UCL & UCLH',
      bio: 'Robotic surgeon at UCLH, associate professor at UCL, and MedTech industry consultant specializing in surgical training and skills assessments.',
      extendedBio: 'Justin graduated from Bristol University England and has completed surgical fellowships at Clinique St Augustine, Bordeaux; Karolinska, Stockholm; USC Keck Medical Los Angeles and Mansoura University Hospital, Egypt. From 2014-2019, he worked as a Urologist and research coordinator at the Karolinska Institutet in Stockholm, also serving as the medical director at ORSI academy.',
      achievements: [
        'Published over 200 articles on robotic surgery',
        'Ranked 32nd globally for publications on Robotic Surgical procedures (Expertscape)',
        'Guest editor for Current Opinion in Urology and MDPI Healthcare journal',
        'Leading research in standardizing robotic training and train the trainer curricula'
      ],
      topics: ['Robotic Surgery', 'Surgical Training', 'Telesurgery', 'AI in Healthcare'],
      image:doc1
    },
    {
      name: 'Dr. K.S. Raghunath',
      title: 'Senior Urologist',
      affiliation: 'HCG',
      bio: 'Expert in treating all types of urological cancers, from simple to highly complex cases, with extensive experience in Open, Laparoscopic and Robotic surgeries.',
      extendedBio: 'Dr. Raghunath and his team have one of the largest series of performing uro-oncological surgeries by open as well as by robotic means in India.',
      topics: ['Urological Cancers', 'Robotic Surgery', 'Laparoscopic Surgery'],
      image: doc2,
      website: 'https://drraghunathsk.com/'
    },
    {
      name: 'Dr. Vinodh Kumar Adithya',
      title: 'Director',
      affiliation: 'KARL STORZ, Leipzig',
      bio: 'Distinguished urologist and medical technology innovator, focusing on advancing minimally invasive surgical techniques and integrating AI into urological practices.',
      extendedBio: 'Previously publishing under Dr. Vinosh Kumar Adithyaa Arthanareeswaran, his scholarly contributions have been widely recognized. Affiliated with the European Board of Urology, he leads initiatives leveraging cutting-edge technology to improve surgical outcomes and patient care.',
      topics: ['Medical Innovation', 'AI Integration', 'Minimally Invasive Surgery'],
      image: doc3,
    }
  ];

  const schedule = [
    {
      time: '10:00 AM - 10:10 AM',
      title: 'Welcome and Opening Remarks',
      speaker: 'Dr. Vinodh Adithya',
      description: 'Brief introduction to the symposium\'s objectives and an overview of the day\'s schedule.',
      type: 'session'
    },
    {
      time: '10:10 AM - 10:30 AM',
      title: 'AI in Urology: Current Applications and Future Prospects',
      speaker: 'Dr. K.S. Raghunath',
      affiliation: 'HCG',
      description: 'An overview of how AI is transforming diagnostics, treatment planning, and patient management in urology.',
      type: 'session'
    },
    {
      time: '10:30 AM - 10:50 AM',
      title: 'Integrating AI into Clinical Workflows: Challenges and Solutions',
      speaker: 'Dr. Vinodh Kumar Adithya',
      affiliation: 'University of Leipzig',
      description: 'Insights into the practical aspects of adopting AI tools in everyday clinical settings.',
      type: 'session'
    },
    {
      time: '10:50 AM - 11:10 AM',
      title: 'Panel Discussion and Q&A',
      speaker: 'Moderator: Dr. Vinodh Adithya',
      description: 'An interactive session addressing audience questions and discussing the integration of AI in urology.',
      type: 'panel'
    },
    {
      time: '11:10 AM - 11:30 AM',
      title: 'Coffee Break',
      speaker: '',
      description: 'Network with colleagues and speakers.',
      type: 'break'
    },
    {
      time: '11:30 AM - 12:00 PM',
      title: 'Training the Next Generation: AI in Surgical Education',
      speaker: 'Dr. Justin Collins',
      affiliation: 'UCLH',
      description: 'Discussion on how AI and simulation technologies are shaping surgical training programs.',
      type: 'session'
    },
    {
      time: '12:00 PM - 12:30 PM',
      title: 'Advancements in Robotic-Assisted Urologic Surgeries',
      speaker: 'Dr. K.S. Raghunath',
      affiliation: 'HCG',
      description: 'Exploration of the latest technologies and techniques in robotic urologic surgeries.',
      type: 'session'
    },
    {
      time: '12:30 PM - 01:00 PM',
      title: 'AI-Driven Surgical Planning and Navigation',
      speaker: 'Dr. Vinodh Adithya',
      description: 'Examination of AI applications in preoperative planning and intraoperative guidance.',
      type: 'session'
    },
    {
      time: '01:00 PM - 01:30 PM',
      title: 'Q&A',
      speaker: 'Moderator: Dr. Vinodh Adithya',
      description: 'Engaging the audience in discussions about the future of robotic surgery and AI\'s role.',
      type: 'panel'
    },
    {
      time: '02:00 PM',
      title: 'Closing Remarks',
      speaker: 'Moderator',
      description: 'Summarizing key takeaways and thanking participants and speakers.',
      type: 'closing'
    }
  ];

  const benefits = [
    {
      title: 'Expert Insights',
      description: 'Gain direct insights from leading experts who are pioneering AI and robotic advancements in urology.',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Cutting-Edge Knowledge',
      description: 'Stay ahead by understanding how AI and robotics are reshaping patient care, diagnostics, and surgery.',
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Interactive Learning',
      description: 'Engage actively through panel discussions and Q&A sessions designed to foster meaningful dialogue.',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with peers, innovators, and thought leaders, fostering potential collaborations and growth.',
      icon: <Network className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}
            >
              AIRU 2025
            </motion.div> */}
            <Link to="/">
              <img
                src={isScrolled? img : img1}
                alt="Posspole Logo"
                className="h-8 mr-3 transition-all duration-300"
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'schedule', 'speakers', 'benefits'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-blue-400 ${
                    isScrolled ? 'text-blue-900' : 'text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-full ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                } transition-all`}
              >
                Register Now
              </motion.a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen 
                ? <X className={isScrolled ? 'text-blue-900' : 'text-white'} size={24} /> 
                : <Menu className={isScrolled ? 'text-blue-900' : 'text-white'} size={24} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {['about', 'schedule', 'speakers', 'benefits'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-blue-900 font-medium py-2 hover:text-blue-600"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
              <motion.a
                whileHover={{ x: 10 }}
                href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-blue-900 font-medium py-2 hover:text-blue-600"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-white py-32 md:py-48">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Events
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                May 13th, 2025 • Posspole, Bengaluru
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                AI in Urology & 
                <span className="block text-blue-300">Robotic Surgery</span>
                Symposium
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Join leading experts to explore cutting-edge advancements in AI applications 
                and robotic technologies in urologic practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <div className="glass-card rounded-2xl p-6">
                <Calendar className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-medium mb-1">Date</h3>
                <p className="text-blue-100">May 13th, 2025</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <Clock className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-medium mb-1">Time</h3>
                <p className="text-blue-100">10:00 AM – 2:00 PM</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <MapPin className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-blue-100">Posspole, Bengaluru</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <Users className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-medium mb-1">Audience</h3>
                <p className="text-blue-100">Medical Professionals</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <a
                href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium transition-all transform hover:scale-105"
              >
                Register Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">About the Symposium</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                The AI in Urology and Robotic Surgery Symposium brings together leading experts, researchers, 
                and practitioners to explore cutting-edge advancements in artificial intelligence and robotics 
                within urological practice.
              </p>
              <p>
                This comprehensive event covers the latest developments in AI-driven diagnostics, treatment planning, 
                robotic-assisted surgeries, and clinical workflows, providing attendees with valuable insights and 
                practical knowledge to enhance their practice.
              </p>
              <p>
                Join us for this unique opportunity to engage with thought leaders, network with peers, and gain 
                hands-on experience with the technologies shaping the future of urology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Symposium Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive program featuring expert speakers, panel discussions, and 
              interactive sessions exploring AI in urologic practice and robotic surgery.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {schedule.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer
                    ${session.type === 'break' ? 'border-l-4 border-orange-500' :
                      session.type === 'panel' ? 'border-l-4 border-purple-500' :
                      session.type === 'closing' ? 'border-l-4 border-red-500' :
                      'border-l-4 border-blue-500'}
                  `}
                  onClick={() => setActiveSession(activeSession === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <Clock className="w-4 h-4 mr-2" />
                          {session.time}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{session.title}</h3>
                        {session.speaker && (
                          <p className="text-gray-600">
                            {session.speaker}
                            {session.affiliation && <span className="text-gray-500"> ({session.affiliation})</span>}
                          </p>
                        )}
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transform transition-transform ${
                          activeSession === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    
                    {activeSession === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-gray-100"
                      >
                        <p className="text-gray-600">{session.description}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Featured Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from world-renowned experts who are pioneering AI and robotic advancements in urology.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="aspect-[4/3] md:aspect-auto md:h-full">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{speaker.name}</h3>
                      <p className="text-emerald-700 font-medium">{speaker.title}</p>
                      <p className="text-gray-500">{speaker.affiliation}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-700">{speaker.bio}</p>
                      {speaker.extendedBio && (
                        <p className="text-gray-700">{speaker.extendedBio}</p>
                      )}
                      
                      {speaker.achievements && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-blue-900 mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {speaker.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-3"></div>
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2 pt-4">
                        {speaker.topics.map((topic, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      {speaker.website && (
                        <div className="mt-6">
                          <a 
                            href={speaker.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Visit Website
                            <ChevronRight className="ml-1 w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Why Attend?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This symposium will equip you with essential knowledge, perspectives, and networks 
              to enhance your practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12 text-white text-center">
                <h3 className="text-3xl font-bold mb-6">Ready to Join?</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Secure your place at this exclusive symposium and join the conversation 
                  shaping the future of urology.
                </p>
                <a
                  href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Register Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">AIRU 2025</h3>
              <p className="text-blue-200 mb-4">
                AI in Urology and Robotic Surgery Symposium
              </p>
              <p className="text-blue-200 text-sm">
                May 13th, 2025 • Posspole, Bengaluru
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Schedule', 'Speakers', 'Benefits'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li>symposium@aiurology.org</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs font-medium">{social.substring(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200 text-sm">
            <p>© 2025 AI in Urology and Robotic Surgery Symposium. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <WhoAre />

     <Footer />
     
    </div>
  );
}

export default App;