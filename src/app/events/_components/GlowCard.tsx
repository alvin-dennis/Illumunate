import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'red' | 'gold' | 'green' | 'purple';
}

const GlowCard = ({ children, className = '', glowColor = 'red' }: GlowCardProps) => {
  const glowStyles = {
    red: 'before:bg-gradient-to-r before:from-primary/0 before:via-primary/50 before:to-primary/0',
    gold: 'before:bg-gradient-to-r before:from-accent/0 before:via-accent/50 before:to-accent/0',
    green: 'before:bg-gradient-to-r before:from-secondary/0 before:via-secondary/50 before:to-secondary/0',
    purple: 'before:bg-gradient-to-r before:from-purple-500/0 before:via-purple-500/50 before:to-purple-500/0',
  };

  return (
    <div className={`group relative ${className}`}>
      <div 
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 ${glowStyles[glowColor]}`}
        style={{
          background: glowColor === 'red' 
            ? 'linear-gradient(90deg, transparent, hsl(0, 72%, 50%), transparent)'
            : glowColor === 'gold'
            ? 'linear-gradient(90deg, transparent, hsl(45, 90%, 55%), transparent)'
            : glowColor === 'green'
            ? 'linear-gradient(90deg, transparent, hsl(150, 60%, 35%), transparent)'
            : 'linear-gradient(90deg, transparent, hsl(280, 60%, 50%), transparent)',
        }}
      />
      <div className="relative rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 transition-all duration-500 group-hover:border-border group-hover:bg-card/90">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
