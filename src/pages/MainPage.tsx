import React from 'react';
import Header from '../components/HeaderMain';
import Hero from '../components/HeroMain';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Events />
        
        <AboutUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainPage;