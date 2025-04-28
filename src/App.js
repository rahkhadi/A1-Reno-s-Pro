import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import KitchenRenovations from './pages/services/KitchenRenovations';
import BathroomRemodeling from './pages/services/BathroomRemodeling';
import FlooringInstallation from './pages/services/FlooringInstallation';
import PaintingWallFinishes from './pages/services/PaintingWallFinishes';
import DrywallInstallation from './pages/services/DrywallInstallation';
import LightingDesign from './pages/services/LightingDesign';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
        <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
        <Route path="/services/flooring-installation" element={<FlooringInstallation />} />
        <Route path="/services/painting-wall-finishes" element={<PaintingWallFinishes />} />
        <Route path="/services/drywall-installation" element={<DrywallInstallation />} />
        <Route path="/services/lighting-design" element={<LightingDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;