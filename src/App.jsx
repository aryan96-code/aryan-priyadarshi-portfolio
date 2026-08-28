import React, { useState } from 'react';
import GridBackground from './components/layout/GridBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import AboutMe from './components/sections/AboutMe';
import TechnicalArsenal from './components/sections/TechnicalArsenal';
import CurrentlyLearning from './components/sections/CurrentlyLearning';
import DeveloperJourney from './components/sections/DeveloperJourney';
import BeyondCode from './components/sections/BeyondCode';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

import ResumeModal from './components/ui/ResumeModal';
import FluencyBandModal from './components/ui/FluencyBandModal';
import CertificateModal from './components/ui/CertificateModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [fluencyBandOpen, setFluencyBandOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="relative min-h-screen text-slate-200 overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Texture & Ambient Lights */}
      <GridBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10 space-y-8">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <SelectedWork onOpenFluencyBandModal={() => setFluencyBandOpen(true)} />
        <AboutMe />
        <TechnicalArsenal />
        <CurrentlyLearning />
        <DeveloperJourney />
        <BeyondCode />
        <Certifications onOpenCertificate={(cert) => setActiveCert(cert)} />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <FluencyBandModal 
        isOpen={fluencyBandOpen} 
        onClose={() => setFluencyBandOpen(false)} 
      />

      <CertificateModal 
        cert={activeCert} 
        onClose={() => setActiveCert(null)} 
      />
    </div>
  );
}
