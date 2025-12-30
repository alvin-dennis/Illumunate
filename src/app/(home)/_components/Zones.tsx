"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { zoneData } from '@/data/zones';
import { MotionDiv } from '@/components/Framer';

export default function Zones() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <section className="relative py-40 overflow-hidden">
      <MotionDiv
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] transition-opacity duration-700"
        animate={{
          opacity: hoveredZone ? 0.3 : 0,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Three Paths
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl text-primary uppercase">Zones</h2>
              <p className="text-sm mt-2">
                Each zone is a unique dimension of creative expression.
              </p>
            </div>
          </MotionDiv>

          <div className="space-y-2">
            {zoneData.map((zone, index) => (
              <MotionDiv
                key={zone.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Link href={`/zones?zone=${zone.id}`}>
                  <MotionDiv
                    className="group relative py-8 md:py-12 border-t border-border/30 cursor-pointer"
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MotionDiv
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{ backgroundColor: 'hsl(350 75% 50% / 1)' }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: hoveredZone === zone.id ? 1 : 0,
                        opacity: hoveredZone === zone.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8 md:gap-16">
                        <span className="text-sm text-muted-foreground  w-8">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-4xl md:text-6xl lg:text-7xl transition-all duration-500">
                            {zone.name}
                          </h3>
                          <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {zone.tagline}
                          </p>
                        </div>
                      </div>

                      <MotionDiv
                        className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center"
                        animate={{
                          borderColor:
                            hoveredZone === zone.id
                              ? 'hsl(350 75% 50%)'
                              : 'hsl(var(--border) / 0.5)',
                          boxShadow:
                            hoveredZone === zone.id
                              ? '0 0 30px hsl(350 75% 50% / 0.25)'
                              : 'none',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </MotionDiv>
                    </div>
                  </MotionDiv>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

