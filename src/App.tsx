import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Faculty from './components/Faculty';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EventDetails />
        <Faculty />
        <Schedule />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;