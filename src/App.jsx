import React, { useState, useEffect } from 'react';
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
import Highlights from './components/sections/Highlights';

import ResumeModal from './components/ui/ResumeModal';
import FluencyBandModal from './components/ui/FluencyBandModal';
import CertificateModal from './components/ui/CertificateModal';
import KonamiTerminalModal from './components/ui/KonamiTerminalModal';
import AchievementToast from './components/ui/AchievementToast';

import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [fluencyBandOpen, setFluencyBandOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Skill filter state across page
  const [activeSkillFilter, setActiveSkillFilter] = useState(null);
  const [skillClicksCount, setSkillClicksCount] = useState(0);

  // Achievement System State
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [unlockedIds, setUnlockedIds] = useState(new Set());

  const triggerAchievement = (id) => {
    if (!unlockedIds.has(id)) {
      const ach = PORTFOLIO_DATA.achievements.find(a => a.id === id);
      if (ach) {
        setUnlockedIds(prev => new Set(prev).add(id));
        setActiveAchievement(ach);
      }
    }
  };

  // Scroll to bottom achievement trigger & Konami Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.offsetHeight - 150;
      if (scrollPosition >= threshold) {
        triggerAchievement('deep-diver');
      }
    };

    // Konami Code Listener (Up Up Down Down Left Right Left Right B A)
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          triggerAchievement('terminal-hacker');
          setTerminalOpen(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [unlockedIds]);

  const handleSelectSkillFilter = (skillName) => {
    setActiveSkillFilter(skillName);
    const newCount = skillClicksCount + 1;
    setSkillClicksCount(newCount);

    if (newCount >= 3) {
      triggerAchievement('tech-explorer');
    }

    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-200 overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Texture & Ambient Lights */}
      <GridBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10 space-y-8">
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
          onOpenTerminal={() => {
            triggerAchievement('terminal-hacker');
            setTerminalOpen(true);
          }}
        />

        <SelectedWork 
          onOpenFluencyBandModal={() => {
            triggerAchievement('hardware-master');
            setFluencyBandOpen(true);
          }} 
          activeSkillFilter={activeSkillFilter}
          onClearSkillFilter={() => setActiveSkillFilter(null)}
        />

        <TechnicalArsenal 
          activeSkillFilter={activeSkillFilter}
          onSelectSkillFilter={handleSelectSkillFilter}
        />

        <AboutMe />

        <CurrentlyLearning />

        <DeveloperJourney />

        <BeyondCode />

        <Certifications 
          onOpenCertificate={(cert) => {
            triggerAchievement('credential-verified');
            setActiveCert(cert);
          }} 
        />

        <Highlights />

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

      <KonamiTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Achievement Toast */}
      <AchievementToast 
        achievement={activeAchievement} 
        onClose={() => setActiveAchievement(null)} 
      />
    </div>
  );
}
