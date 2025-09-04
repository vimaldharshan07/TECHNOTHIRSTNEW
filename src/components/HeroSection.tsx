import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import bannerImage from '../assets/technothrist-banner.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
        <h1 className="text-6xl md:text-9xl font-bold mb-6 text-glow floating">
          <span className="gradient-rainbow bg-clip-text text-transparent gradient-shift">
            Techno
          </span>
          <span className="gradient-golden bg-clip-text text-transparent gradient-shift">
            thirsT
          </span>
        </h1>
        
        <div className="mb-8 space-y-4">
          <p className="text-2xl md:text-4xl text-rainbow font-bold animate-fade-in-up gradient-shift" style={{ animationDelay: '0.5s' }}>
            🚀 Igniting Innovation, Inspiring Minds 🚀
          </p>
          <p className="text-lg md:text-xl gradient-secondary bg-clip-text text-transparent animate-fade-in-up floating" style={{ animationDelay: '2s' }}>
            ✨ A.V.C College of Engineering Symposium 2025 ✨
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <button 
            onClick={() => scrollToSection('departments')}
            className="glass px-8 py-4 rounded-full text-white font-bold hover:glow-rainbow transition-smooth hover:scale-110 gradient-primary gradient-shift"
          >
            🎯 Explore Departments 🎯
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="glass px-8 py-4 rounded-full text-white font-bold hover:glow-rainbow transition-smooth hover:scale-110 gradient-golden gradient-shift"
          >
            🌟 Learn More 🌟
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center floating">
          <ChevronDown 
            className="w-10 h-10 text-accent cursor-pointer hover:text-primary transition-smooth gradient-rainbow bg-clip-text glow-rainbow"
            onClick={() => scrollToSection('departments')}
          />
          <div className="text-sm text-rainbow font-bold mt-2">Scroll Down ⬇️</div>
        </div>
      </div>
    </section>
  );
};