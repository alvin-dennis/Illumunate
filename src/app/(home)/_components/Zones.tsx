"use client"
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const zones = [
  {
    id: 'aurora',
    name: 'AURORA',
    subtitle: 'Creativity & Design',
    color: 'crimson',
  },
  {
    id: 'spark',
    name: 'SPARK',
    subtitle: 'Technical & Innovation',
    color: 'champagne',
  },
  {
    id: 'noel',
    name: 'NOEL',
    subtitle: 'Community & Culture',
    color: 'emerald',
  },
];

const AbstractZones = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const getGlowColor = (color: string) => {
    switch (color) {
      case 'crimson': return 'hsl(350 75% 50%)';
      case 'emerald': return 'hsl(160 70% 40%)';
      case 'champagne': return 'hsl(40 80% 60%)';
      default: return 'hsl(350 75% 50%)';
    }
  };

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] transition-opacity duration-700"
        animate={{
          opacity: hoveredZone ? 0.3 : 0,
          backgroundColor: hoveredZone ? getGlowColor(zones.find(z => z.id === hoveredZone)?.color || 'crimson') : 'transparent',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Three Paths
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl">ZONES</h2>
            </div>
            <p className="text-editorial text-sm max-w-xs">
              Each zone is a unique dimension of creative expression.
            </p>
          </motion.div>

          <div className="space-y-2">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Link href={`/zones?zone=${zone.id}`}>
                  <motion.div
                    className="group relative py-8 md:py-12 border-t border-border/30 cursor-pointer"
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{ backgroundColor: getGlowColor(zone.color) }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: hoveredZone === zone.id ? 1 : 0,
                        opacity: hoveredZone === zone.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8 md:gap-16">
                        <span className="text-sm text-muted-foreground font-mono w-8">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-display text-4xl md:text-6xl lg:text-7xl group-hover:text-gradient transition-all duration-500">
                            {zone.name}
                          </h3>
                          <p className="text-editorial text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {zone.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center"
                        animate={{
                          borderColor: hoveredZone === zone.id ? getGlowColor(zone.color) : 'hsl(var(--border) / 0.5)',
                          boxShadow: hoveredZone === zone.id ? `0 0 30px ${getGlowColor(zone.color)}40` : 'none',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractZones;
