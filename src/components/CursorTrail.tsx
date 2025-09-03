import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let animationId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };
      
      setTrail(prev => [...prev.slice(-10), newPoint]);
    };

    const fadeTrail = () => {
      setTrail(prev => prev.slice(1));
      animationId = requestAnimationFrame(fadeTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(fadeTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 10,
            top: point.y - 10,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
};