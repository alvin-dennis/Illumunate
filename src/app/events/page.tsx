"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Zap, Heart, Award, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlowCard from '@/app/events/_components/GlowCard';

const zones = [
    { id: 'aurora', name: 'Zone Aurora', icon: Palette, color: 'purple' as const },
    { id: 'spark', name: 'Zone Spark', icon: Zap, color: 'gold' as const },
    { id: 'noel', name: 'Zone Noel', icon: Heart, color: 'green' as const },
];

const events = {
    aurora: [
        { id: 1, name: 'Design Sprint Challenge', description: 'Create stunning visual designs in a timed competition.', points: 500, deadline: 'Dec 20, 2024' },
        { id: 2, name: 'Digital Art Showcase', description: 'Showcase your best digital artwork and illustrations.', points: 400, deadline: 'Dec 22, 2024' },
        { id: 3, name: 'Logo Design Contest', description: 'Design a logo that captures the spirit of Illuminate.', points: 350, deadline: 'Dec 18, 2024' },
        { id: 4, name: 'UI/UX Challenge', description: 'Redesign a Christmas-themed app interface.', points: 450, deadline: 'Dec 21, 2024' },
    ],
    spark: [
        { id: 5, name: 'Code Blitz Hackathon', description: '24-hour hackathon to build innovative solutions.', points: 600, deadline: 'Dec 19, 2024' },
        { id: 6, name: 'Algorithm Challenge', description: 'Solve complex algorithmic problems under time pressure.', points: 500, deadline: 'Dec 20, 2024' },
        { id: 7, name: 'AI/ML Showcase', description: 'Build and present an AI-powered Christmas project.', points: 550, deadline: 'Dec 23, 2024' },
        { id: 8, name: 'Web Dev Sprint', description: 'Create a festive web application from scratch.', points: 450, deadline: 'Dec 21, 2024' },
    ],
    noel: [
        { id: 9, name: 'Carol Competition', description: 'Perform your best Christmas carols and win hearts.', points: 400, deadline: 'Dec 22, 2024' },
        { id: 10, name: 'Cultural Dance', description: 'Showcase traditional and modern dance forms.', points: 450, deadline: 'Dec 23, 2024' },
        { id: 11, name: 'Christmas Decoration', description: 'Transform spaces with festive decorations.', points: 350, deadline: 'Dec 20, 2024' },
        { id: 12, name: 'Secret Santa Drive', description: 'Participate in community gift-giving initiatives.', points: 300, deadline: 'Dec 24, 2024' },
    ],
};

const zoneStyles = {
    aurora: {
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30',
        color: 'text-purple-400',
        glowColor: 'purple' as const,
    },
    spark: {
        bgColor: 'bg-accent/10',
        borderColor: 'border-accent/30',
        color: 'text-accent',
        glowColor: 'gold' as const,
    },
    noel: {
        bgColor: 'bg-secondary/10',
        borderColor: 'border-secondary/30',
        color: 'text-secondary',
        glowColor: 'green' as const,
    },
};

const Events = () => {
    const [activeZone, setActiveZone] = useState<'aurora' | 'spark' | 'noel'>('aurora');
    const activeZoneData = zones.find(z => z.id === activeZone)!;
    const activeStyles = zoneStyles[activeZone];

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <ScrollReveal className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                            Participate & Win
                        </span>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
                            Zone-wise <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">Events</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore events across all three zones. Each event offers unique challenges
                            and rewards for participants.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-3 mb-12">
                        {zones.map((zone) => (
                            <Button
                                key={zone.id}
                                variant={activeZone === zone.id ? "default" : "outline"}
                                size="lg"
                                onClick={() => setActiveZone(zone.id as 'aurora' | 'spark' | 'noel')}
                                className="gap-2"
                            >
                                <zone.icon className="w-5 h-5" />
                                {zone.name}
                            </Button>
                        ))}
                    </ScrollReveal>

                    {/* Zone Header */}
                    <ScrollReveal delay={150} className={`p-8 rounded-3xl border ${activeStyles.borderColor} ${activeStyles.bgColor} mb-10`}>
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl ${activeStyles.bgColor} border ${activeStyles.borderColor} flex items-center justify-center`}>
                                <activeZoneData.icon className={`w-7 h-7 ${activeStyles.color}`} />
                            </div>
                            <div>
                                <h2 className="font-display text-2xl font-bold text-foreground">{activeZoneData.name}</h2>
                                <p className="text-muted-foreground">
                                    {activeZone === 'aurora' && 'Creativity & Design Events'}
                                    {activeZone === 'spark' && 'Technical & Innovation Events'}
                                    {activeZone === 'noel' && 'Fun, Community & Culture Events'}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Events Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {events[activeZone].map((event, index) => (
                            <ScrollReveal key={event.id} delay={index * 100}>
                                <GlowCard glowColor={activeStyles.glowColor} className="h-full">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">
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
                                            <Button variant="default" size="sm" className="group/btn">
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

export default Events;
