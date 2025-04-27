import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
// Import individual event pages instead of generic EventPage
import UrosurgeryWorkshop2025 from './pages/events/UrosurgeryWorkshop2025';
import NeurologyConference2024 from './pages/events/NeurologyConference2024';
import BrainTumorWorkshop2024 from './pages/events/BrainTumorWorkshop2024';
import SpineSurgery2024 from './pages/events/SpineSurgery2024';
import NeurologyWorkshop2025 from './pages/events/NeurologyWorkshop2025';
// Import other components
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Faculty from './components/Faculty';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Individual routes for each event with custom pages */}
        <Route path="/event/urosurgery-workshop-2025" element={<UrosurgeryWorkshop2025 />} />
        <Route path="/event/neurology-conference-2024" element={<NeurologyConference2024 />} />
        <Route path="/event/brain-tumor-workshop-2024" element={<BrainTumorWorkshop2024 />} />
        <Route path="/event/spine-surgery-2024" element={<SpineSurgery2024 />} />
        <Route path="/event/neurology-workshop-2025" element={<NeurologyWorkshop2025 />} />
      </Routes>
    </Router>
  );

}

export default App;