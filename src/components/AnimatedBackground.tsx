import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [birds, setBirds] = useState<Array<{ id: number; y: number; size: number; speed: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    const generateBirds = () => {
      const newBirds = [];
      for (let i = 0; i < 8; i++) {
        newBirds.push({
          id: i,
          y: Math.random() * 60 + 10, // Birds fly in upper 60% of screen
          size: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 10 + 15, // 15-25s animation duration
          delay: Math.random() * 20, // Stagger the birds
        });
      }
      setBirds(newBirds);
    };

    generateStars();
    generateBirds();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-sky opacity-90" />
      
      {/* Floating Clouds */}
      <div className="absolute top-10 left-0 w-24 h-12 bg-white/30 rounded-full animate-drift" 
           style={{ animationDelay: '0s', animationDuration: '25s' }} />
      <div className="absolute top-32 left-0 w-32 h-16 bg-white/20 rounded-full animate-drift" 
           style={{ animationDelay: '5s', animationDuration: '30s' }} />
      <div className="absolute top-20 left-0 w-20 h-10 bg-white/25 rounded-full animate-drift" 
           style={{ animationDelay: '10s', animationDuration: '20s' }} />
      
      {/* Flying Birds */}
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="absolute text-stardew-brown/60 animate-drift"
          style={{
            top: `${bird.y}%`,
            left: '-50px',
            fontSize: `${bird.size}rem`,
            animationDuration: `${bird.speed}s`,
            animationDelay: `${bird.delay}s`,
            transform: `scale(${bird.size})`,
          }}
        >
          🕊️
        </div>
      ))}
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-stardew-gold rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default AnimatedBackground;