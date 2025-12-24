"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "react-countup";
import { zoneData } from "@/data/zones";

import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Calendar,
    Users,
    Award,
} from "lucide-react";

export default function Zones() {
    const searchParams = useSearchParams();
    const zoneParam = searchParams.get("zone");

    const [selectedZone, setSelectedZone] = useState(
        zoneParam || "aurora"
    );

    const activeZone =
        zoneData.find((z) => z.id === selectedZone) || zoneData[0];

    return (
        <div className="min-h-screen">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <ScrollReveal className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4">
                            Three Paths
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Explore{" "}
                            <span className="text-primary">
                                Zones
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Three unique zones, each offering distinct challenges and
                            experiences. Choose your path and begin your Illuµnate journey.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-3 mb-16">
                        {zoneData.map((zone) => (
                            <Button
                                key={zone.id}
                                variant={selectedZone === zone.id ? "default" : "ghost"}
                                size="lg"
                                onClick={() => setSelectedZone(zone.id)}
                                className="gap-2"
                            >
                                <zone.icon className="w-5 h-5" />
                                {zone.name}
                            </Button>
                        ))}
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="max-w-5xl mx-auto">
                        <div
                            className={`relative rounded-3xl p-8 md:p-12 border ${activeZone.borderColor} bg-card/30 backdrop-blur-sm`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${activeZone.gradient} opacity-5 rounded-3xl`}
                            />
                            <div
                                className={`absolute top-0 left-12 right-12 h-px bg-gradient-to-r ${activeZone.gradient} opacity-50`}
                            />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <div
                                        className={`w-20 h-20 rounded-2xl ${activeZone.bgColor} flex items-center justify-center mb-6`}
                                    >
                                        <activeZone.icon
                                            className={`w-10 h-10 ${activeZone.color}`}
                                        />
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                        {activeZone.name}
                                    </h2>
                                    <p className={`text-lg font-semibold ${activeZone.color} mb-4`}>
                                        {activeZone.tagline}
                                    </p>
                                    <p className="text-muted-foreground text-lg mb-8">
                                        {activeZone.description}
                                    </p>

                                    <Link href={`/events?zone=${activeZone.id}`}>
                                        <Button variant="default" size="lg" className="group gap-2">
                                            View All Events
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>

                                <div className="md:w-72 space-y-4">
                                    {[
                                        {
                                            label: "Total Events",
                                            value: activeZone.events,
                                            icon: Calendar,
                                            duration: 1000,
                                        },
                                        {
                                            label: "Participants",
                                            value: activeZone.participants,
                                            icon: Users,
                                            duration: 1500,
                                            suffix: "+",
                                        },
                                        {
                                            label: "Total Points",
                                            value: activeZone.totalPoints,
                                            icon: Award,
                                            duration: 2000,
                                        },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className={`p-6 rounded-2xl ${activeZone.bgColor} border ${activeZone.borderColor}`}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <stat.icon className={`w-5 h-5 ${activeZone.color}`} />
                                                <span className="text-sm text-muted-foreground">
                                                    {stat.label}
                                                </span>
                                            </div>
                                            <div className="text-3xl font-bold">
                                                <CountUp
                                                    end={stat.value}
                                                    duration={stat.duration}
                                                    suffix={stat.suffix}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </div>
    );
}
