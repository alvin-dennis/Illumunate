"use client"
import { motion } from 'framer-motion';

interface LightFormProps {
  variant?: 'orb' | 'ring' | 'wave';
  color?: 'crimson' | 'emerald' | 'champagne' | 'mixed';
  size?: number;
  className?: string;
}

const LightForm = ({ variant = 'orb', color = 'crimson', size = 200, className = '' }: LightFormProps) => {
  const getColor = () => {
    switch (color) {
      case 'crimson': return 'hsl(350 75% 50%)';
      case 'emerald': return 'hsl(160 70% 40%)';
      case 'champagne': return 'hsl(40 80% 60%)';
      case 'mixed': return undefined;
      default: return 'hsl(350 75% 50%)';
    }
  };

  if (variant === 'orb') {
    return (
      <motion.div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full animate-morph"
          style={{
            background: color === 'mixed' 
              ? 'linear-gradient(135deg, hsl(350 75% 50% / 0.6), hsl(160 70% 40% / 0.4), hsl(40 80% 60% / 0.5))'
              : `radial-gradient(circle, ${getColor()} / 0.6 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div
          className="absolute inset-[30%] rounded-full"
          style={{
            background: color === 'mixed'
              ? 'radial-gradient(circle, hsl(var(--foreground) / 0.9), transparent)'
              : `radial-gradient(circle, ${getColor()} / 0.9, transparent)`,
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    );
  }

  if (variant === 'ring') {
    return (
      <motion.div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: color === 'mixed' 
                ? i === 0 ? 'hsl(350 75% 50% / 0.3)' : i === 1 ? 'hsl(160 70% 40% / 0.2)' : 'hsl(40 80% 60% / 0.2)'
                : `${getColor()} / ${0.3 - i * 0.1}`,
              transform: `scale(${1 + i * 0.15})`,
            }}
            animate={{
              rotate: [0, i % 2 === 0 ? 360 : -360],
              scale: [1 + i * 0.15, 1.1 + i * 0.15, 1 + i * 0.15],
            }}
            transition={{
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
            }}
          />
        ))}
      </motion.div>
    );
  }

  if (variant === 'wave') {
    return (
      <motion.div className={`relative ${className}`} style={{ width: size, height: size }}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${getColor()} / ${0.4 - i * 0.08})`,
            }}
            animate={{
              scale: [1, 2],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.75,
              ease: 'easeOut',
            }}
          />
        ))}
        <div
          className="absolute inset-[40%] rounded-full"
          style={{
            background: `${getColor()}`,
            boxShadow: `0 0 40px ${getColor()}`,
          }}
        />
      </motion.div>
    );
  }

  return null;
};

export default LightForm;
