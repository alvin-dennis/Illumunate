"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { zoneData, zones } from "@/data/zones";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Zones() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const zoneParam = searchParams.get("zone");

    const activeZone =
        zoneData.find((z) => z.id === zoneParam) || zoneData[1];

    const handleZoneChange = (zoneId: string) => {
        router.replace(`/zones?zone=${zoneId}`);
    };

    return (
        <div className="min-h-screen">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <ScrollReveal className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4">
                            Three Paths
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Explore <span className="text-primary">Zones</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Three unique zones, each offering distinct challenges and experiences. Choose your path and begin your Illuµnate journey.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-3 mb-16">
                        {zones.map((zone) => (
                            <Button
                                key={zone.id}
                                variant={activeZone.id === zone.id ? "default" : "ghost"}
                                onClick={() => handleZoneChange(zone.id)}
                            >
                                {zone.name}
                            </Button>
                        ))}
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="max-w-3xl mx-auto">
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
                                    <div className={`w-30 h-auto rounded-2xl ${activeZone.bgColor} flex items-center justify-center mb-6`}>
                                        <Image
                                            src={activeZone.mascot}
                                            alt={`${activeZone.name} mascot`}
                                            width={66}
                                            height={70}
                                            className="object-cover"
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
                                        <Button variant="default" className="group gap-2">
                                            View All Zone Events
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </div>
    );
}
