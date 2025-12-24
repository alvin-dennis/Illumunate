"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Award, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlowCard from '@/app/events/_components/GlowCard';
import { zonalEvents } from '@/data/events';
import { zoneIcons, zoneStyles } from '@/data/zones';

export default function Events() {
    const [activeZone, setActiveZone] = useState<'aurora' | 'spark' | 'noel'>('aurora');
    const activeZoneData = zoneIcons.find(z => z.id === activeZone)!;
    const activeStyles = zoneStyles[activeZone];
    return (
        <div className="min-h-screen">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <ScrollReveal className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                            Participate & Win
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                            Zone-wise <span className="text-primary">Events</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore events across all three zones. Each event offers unique challenges
                            and rewards for participants.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-3 mb-12">
                        {zoneIcons.map((zone) => (
                            <Button
                                key={zone.id}
                                variant={activeZone === zone.id ? "default" : "ghost"}
                                onClick={() => setActiveZone(zone.id as 'aurora' | 'spark' | 'noel')}
                                className="gap-2"
                            >
                                <zone.icon className="w-5 h-5" />
                                {zone.name}
                            </Button>
                        ))}
                    </ScrollReveal>
                    <ScrollReveal delay={150} className={`p-8 rounded-3xl border ${activeStyles.borderColor} ${activeStyles.bgColor} mb-10`}>
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl ${activeStyles.bgColor} border ${activeStyles.borderColor} flex items-center justify-center`}>
                                <activeZoneData.icon className={`w-7 h-7 ${activeStyles.color}`} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">{activeZoneData.name}</h2>
                                <p className="text-muted-foreground">
                                    {activeZone === 'aurora' && 'Creativity & Design Events'}
                                    {activeZone === 'spark' && 'Technical & Innovation Events'}
                                    {activeZone === 'noel' && 'Fun, Community & Culture Events'}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {zonalEvents[activeZone].map((event, index) => (
                            <ScrollReveal key={event.id} delay={index * 100}>
                                <GlowCard glowColor={activeStyles.glowColor} className="h-full">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                                                {event.name}
                                            </h3>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
                                                <Award className="w-4 h-4 text-accent" />
                                                <span className="text-sm font-bold text-accent">{event.points} pts</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4" />
                                                <span>Deadline: {event.deadline}</span>
                                            </div>
                                            <Button variant="default" className="group/btn">
                                                Participate
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </GlowCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
