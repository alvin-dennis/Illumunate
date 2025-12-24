"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: 'crimson' | 'emerald' | 'champagne' | 'icy';
  delay: number;
  duration: number;
}

const AbstractOrbs = () => {
  const [orbs] = useState<Orb[]>([
    { id: 1, x: 10, y: 15, size: 500, color: 'crimson', delay: 0, duration: 25 },
    { id: 2, x: 75, y: 10, size: 400, color: 'emerald', delay: 2, duration: 22 },
    { id: 3, x: 45, y: 55, size: 600, color: 'champagne', delay: 1, duration: 28 },
    { id: 4, x: 85, y: 65, size: 350, color: 'crimson', delay: 3, duration: 20 },
    { id: 5, x: 15, y: 75, size: 300, color: 'emerald', delay: 1.5, duration: 24 },
    { id: 6, x: 60, y: 25, size: 250, color: 'icy', delay: 2.5, duration: 18 },
    { id: 7, x: 30, y: 85, size: 280, color: 'champagne', delay: 0.5, duration: 26 },
  ]);

  const getColor = (color: Orb['color']) => {
    switch (color) {
      case 'crimson': return 'hsl(350 75% 50% / 0.18)';
      case 'emerald': return 'hsl(160 70% 40% / 0.15)';
      case 'champagne': return 'hsl(40 80% 60% / 0.12)';
      case 'icy': return 'hsl(200 30% 90% / 0.1)';
    }
  };

  const getGlowColor = (color: Orb['color']) => {
    switch (color) {
      case 'crimson': return 'hsl(350 75% 55% / 0.25)';
      case 'emerald': return 'hsl(160 70% 45% / 0.2)';
      case 'champagne': return 'hsl(40 80% 65% / 0.18)';
      case 'icy': return 'hsl(200 30% 92% / 0.15)';
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full animate-morph"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle at 40% 40%, ${getGlowColor(orb.color)} 0%, ${getColor(orb.color)} 40%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -50, 40, -20, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
            opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Additional subtle icy particles for Christmas atmosphere */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`icy-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: 150 + i * 20,
            height: 150 + i * 20,
            background: 'radial-gradient(circle, hsl(200 30% 95% / 0.08) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -20, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10 + i,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AbstractOrbs;
