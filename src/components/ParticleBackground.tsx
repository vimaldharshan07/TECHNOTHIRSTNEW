import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  color: string;
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const rainbowColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'];
    
    const createParticle = (id: number): Particle => ({
      id,
      x: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 8 + 8,
      color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
    });

    // Initial particles
    const initialParticles = Array.from({ length: 35 }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    // Continuously add new particles
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev];
        // Remove old particles and add new ones
        if (newParticles.length < 50) {
          newParticles.push(createParticle(Date.now()));
        }
        return newParticles.slice(-50); // Keep only last 50 particles
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color}, ${particle.color}80, transparent)`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}60`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};