import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { DepartmentsSection } from '../components/DepartmentsSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { FireworksAnimation } from '../components/FireworksAnimation';
import { ParticleBackground } from '../components/ParticleBackground';
import { CursorTrail } from '../components/CursorTrail';

const Index = () => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleFireworksComplete = () => {
    setShowFireworks(false);
    setTimeout(() => setShowContent(true), 500);
  };

  useEffect(() => {
    // Auto-show content after 5 seconds if fireworks don't complete
    const fallbackTimer = setTimeout(() => {
      setShowFireworks(false);
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Cursor Trail */}
      <CursorTrail />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Fireworks Animation */}
      {showFireworks && <FireworksAnimation onComplete={handleFireworksComplete} />}
      
      {/* Main Content */}
      {showContent && (
        <div className="relative z-10">
          <Navbar />
          <div id="home">
            <HeroSection />
          </div>
          <DepartmentsSection />
          <AboutSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
