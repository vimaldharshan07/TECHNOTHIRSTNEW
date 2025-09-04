import { useEffect, useState } from 'react';

interface FireworkParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

export const FireworksAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [particles, setParticles] = useState<FireworkParticle[]>([]);
  const [showFireworks, setShowFireworks] = useState(true);

  useEffect(() => {
    // Create golden firework particles
    const newParticles: FireworkParticle[] = [];
    const goldenColors = ['#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#B8860B', '#FFFF00', '#FFC125'];
    
    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: goldenColors[Math.floor(Math.random() * goldenColors.length)],
        delay: Math.random() * 1.5
      });
    }
    
    setParticles(newParticles);

    // Auto-hide fireworks and call onComplete
    const timer = setTimeout(() => {
      setShowFireworks(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showFireworks) return null;

  return (
    <div className="fixed inset-0 z-50 gradient-rainbow backdrop-blur-sm flex items-center justify-center gradient-shift">
      <div className="relative w-full h-full">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-golden-explosion"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              color: particle.color,
            }}
          >
            <div 
              className="w-8 h-8 rounded-full opacity-90"
              style={{ 
                background: `radial-gradient(circle, ${particle.color}, ${particle.color}80, transparent)`,
                boxShadow: `0 0 40px ${particle.color}, 0 0 80px ${particle.color}40`,
              }}
            />
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full animate-ping"
              style={{ 
                background: particle.color,
                boxShadow: `0 0 60px ${particle.color}`,
              }}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-bounce">
            <h1 className="text-6xl md:text-9xl font-bold text-glow gradient-golden bg-clip-text text-transparent animate-pulse-glow">
              TECHNOTHRIST
            </h1>
            <div className="text-2xl md:text-4xl mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="text-rainbow font-bold">🎆 Loading... 🎆</span>
            </div>
            <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-3 h-3 rounded-full gradient-golden animate-ping"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};